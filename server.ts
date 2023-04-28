import express, { Express, Request, Response } from 'express';
import { VITE_PORT } from './src/consts';
import { ROUTES } from './src/routes';
// import fs from 'fs';

// async function configProd(app: Express) {
//   app.use(
//     (await import('serve-static')).default('./dist/client', {
//       index: false, // don't send index.html as there's none
//     })
//   );

//   // @ts-ignore
//   const render = (await import('./dist/server/entry-server.js')).render;
//   const bootstrap =
//     '/assets/' +
//     fs
//       .readdirSync('./dist/client/assets')
//       .filter((fn: string) => fn.includes('main') && fn.endsWith('.js'))[0];
//   app.use('*', (req, res) => render(req, res, bootstrap));
//   return app;
// }

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

  app.use(
    ROUTES.map((route) => route.to),
    async (req: Request, res: Response) => {
      try {
        const render = (await viteServer.ssrLoadModule('./entry-server.tsx')).render;
        render(req, res, `/src/main.tsx`);
      } catch (err) {
        const e = err as Error;
        viteServer.ssrFixStacktrace(e);
        console.log(e.stack);
        res.status(500).end(e.stack);
      }
    }
  );
  return app;
}

// const DEFAULT_PORT = 5173;

// const isProd = process.env.NODE_ENV === 'production';
const port = process.env.PORT || VITE_PORT;
const app = express();

// const config = isProd ? configProd : configDev;

configDev(app)
  .then((app) => {
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`);
    });
  })
  .catch(console.error);
