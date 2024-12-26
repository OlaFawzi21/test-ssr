import 'zone.js/node';
import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { AppServerModule } from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/test-app/browser');
  const prerenderedFolder = join(distFolder, 'prerendered'); // Folder where prerendered HTML files will be saved
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  // Universal express-engine (for SSR)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // Serve prerendered HTML if available, fallback to SSR if not
  server.get('*', (req, res) => {
    const route = req.originalUrl;
    const prerenderedHtmlFile = join(prerenderedFolder, `${route}.html`);

    // Check if the route has a prerendered HTML file
    if (existsSync(prerenderedHtmlFile)) {
      res.sendFile(prerenderedHtmlFile); // Serve the prerendered HTML
    } else {
      // Fallback to SSR
      res.render(indexHtml, {
        req,
        providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
      });
    }
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code ensures that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
