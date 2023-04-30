import { fetch } from 'cross-fetch';
import express, { Express, Request, Response } from 'express';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import { VITE_PORT } from './consts';

global.fetch = fetch;

const DIR = path.dirname(fileURLToPath(import.meta.url));
const INDEX_HTML = path.resolve(DIR, '../index.html');
const SERVER_ENTRY = path.resolve(DIR, './server-entry.tsx');

async function configApp(app: Express) {
  const viteServer = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(viteServer.middlewares);

  app.use('*', async (req: Request, res: Response, next) => {
    const url = req.originalUrl;
    try {
      const html = await viteServer.transformIndexHtml(url, readFileSync(INDEX_HTML, 'utf-8'));
      const { render } = await viteServer.ssrLoadModule(SERVER_ENTRY);

      render(url, res, html);
    } catch (err) {
      const e = err as Error;
      viteServer.ssrFixStacktrace(e);
      next(e);
    }
  });
  return app;
}

const port = process.env.PORT || VITE_PORT;
const app = express();

configApp(app)
  .then((app) => {
    app.listen(port, () => {
      console.log(`🚀 Server started at http://localhost:${port}`);
    });
  })
  .catch(console.error);
