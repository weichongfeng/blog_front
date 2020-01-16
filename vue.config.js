const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@styles', resolve('src/assets/styles'))
    },
    devServer: {
        proxy: {
            // proxy all requests starting with /api to jsonplaceholder
            '/api': {
                target: 'http://localhost:8080', //代理接口
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/mock' //代理的路径
                }
            }
        }
    }
}