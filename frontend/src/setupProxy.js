const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/cricapi', // Proxy URL
        createProxyMiddleware({
            target: 'https://api.cricapi.com',
            changeOrigin: true,
            pathRewrite: {
                '^/cricapi': '', // Remove "/cricapi" from the request
            },
        })
    );
};
