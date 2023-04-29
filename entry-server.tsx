import React from 'react';
import ReactDOMServer from 'react-dom/server';
import type { Request, Response } from 'express';
import App from './src/App';
import Html from './src/Html';
import { StaticRouter } from 'react-router-dom/server';

export function render(req: Request, res: Response, bootstrap: string) {
  const { pipe } = ReactDOMServer.renderToPipeableStream(
    <Html>
      <StaticRouter location={req.originalUrl}>
        <App />
      </StaticRouter>
    </Html>,
    {
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html');
        pipe(res);
      },
      onAllReady() {
        res.end();
      },
      bootstrapModules: [bootstrap],
    }
  );
}
