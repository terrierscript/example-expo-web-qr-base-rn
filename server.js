// @generated: @expo/next-adapter@2.1.52
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#using-a-custom-server
const { startServerAsync } = require('@expo/next-adapter');

startServerAsync(__dirname, {
  /* port: 3000 */
});
 require('url');
const projectRoot = __dirname;

let app;
let server;

createServerAsync(projectRoot, {
  handleRequest(res, req) {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // handle GET request to /cool-file.png
    if (pathname === '/cool-file.png') {
      const filePath = join(projectRoot, '.next', pathname);

      app.serveStatic(req, res, filePath);
      // Return true to prevent the default handler
      return true;
    }
  },
}).then(results => {
  const port = 3000;
  server = results.server;
  app = results.app;
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
