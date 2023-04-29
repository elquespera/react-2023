import express, { Express, Request, Response } from 'express';
import { VITE_PORT } from './src/consts';

async function configDev(app: Express) {
  const cwd = process.cwd();
  const vite = await import('vite');

  const viteServer = await vite.createServer({
    root: cwd,
    server: {
      middlewareMode: true,
      hmr: true,
    },
    appType: 'custom',
  });

  app.use(viteServer.middlewares);

  app.use('/', async (req: Request, res: Response) => {
    try {
      const { render } = await viteServer.ssrLoadModule('./entry-server.tsx');
      render(req, res, `/src/main.tsx`);
    } catch (err) {
      const e = err as Error;
      viteServer.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });
  return app;
}

const port = process.env.PORT || VITE_PORT;
const app = express();

configDev(app)
  .then((app) => {
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`);
    });
  })
  .catch(console.error);
