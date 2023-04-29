import type { Response } from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

const HTML_ENTRY = '<!--ssr-->';

export function render(url: string, res: Response, html: string) {
  const [htmlPart1, htmlPart2] = html.split(HTML_ENTRY);

  const { pipe } = ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    {
      onShellReady() {
        res.write(htmlPart1);
        pipe(res);
      },
      onAllReady() {
        res.write(htmlPart2);
        res.end();
      },
    }
  );
}
