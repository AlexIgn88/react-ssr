import { readFileSync, existsSync, lstatSync } from 'node:fs';
import micro, { send } from 'micro';
import { router } from './router.mjs';
import { renderToString } from 'react-dom/server';

import Root from './SSR_Root.jsx';

function getHtml(){
  return readFileSync('./_dest/index.html', 'utf8')
    .replace('<div id="react-root"></div>',`<div id="react-root">${renderToString(Root())}</div>`);
}

const
  server = micro(async (request, response) => {
    console.log((new Date()).toLocaleTimeString(), request.method, request.url, 'HTTP/' + request.httpVersion);
    // const router = getRouter();
    const testFile = './_dest' + request.url;
    if (existsSync(testFile) && lstatSync(testFile).isFile())   // если файл есть в папке dist
      return send(response, 200, readFileSync(testFile, 'utf8')); // просто возвращаем его 
    router.start(request.url, async (error, state) => {
      if (error)
        return send(response, 404, `<h1>${error.code}</h1>` + JSON.stringify(error));
      switch (state?.name) {
        case 'home':
        case 'photos':
        case 'about':
          return send(response, 200, getHtml());
        default:
          return send(response, 200, state);
      }
    });
    router.stop();
  });


const port = 3000;
server.listen(port, () => {
  console.log('Server start at http://localhost:' + port);
});