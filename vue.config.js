module.exports = {
    devServer: {
        proxy: {
            '/rsiadvisor': {
                target: 'http://localhost:8190',
                changeOrigin: true
            },
        }
    }
}