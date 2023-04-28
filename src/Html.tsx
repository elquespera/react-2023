import { ReactNode } from 'react';
import { VITE_PORT } from './consts';

interface HtmlProps {
  children: ReactNode;
}

function Html({ children }: HtmlProps) {
  let viteScripts = <></>;
  if (import.meta.env.DEV) {
    viteScripts = (
      <>
        <script type="module" src={`http://localhost:${VITE_PORT}/@vite/client`}></script>
        <script type="module" src={`http://localhost:${VITE_PORT}/main.js`}></script>
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `import RefreshRuntime from "http://localhost:${VITE_PORT}/@react-refresh"
          RefreshRuntime.injectIntoGlobalHook(window)
          window.$RefreshReg$ = () => {}
          window.$RefreshSig$ = () => (type) => type
          window.__vite_plugin_react_preamble_installed__ = true`,
          }}
        />
      </>
    );
  }

  return (
    <html>
      <head>
        {viteScripts}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Project</title>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}

export default Html;
