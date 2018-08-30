const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

const DEFAULT_PORT = 8080

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`
    })

    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
                <head><title>Hello</title></head>
                <body>${html}</body>
            </html>
        `)
    })
})

server.listen(DEFAULT_PORT, function () {
    console.log('node app start at port ' + DEFAULT_PORT)
})
