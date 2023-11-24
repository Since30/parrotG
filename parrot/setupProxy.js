const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://garage-3c4p.onrender.com",
      changeOrigin: true,
    })
  );
};
