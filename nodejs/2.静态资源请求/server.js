let http = require('http');
let {readFile} = require('fs/promises');
const path = require("path");
let server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    });
    let arr = ['/', '/index']
    if (arr.includes(req.url)) {
        req.url = '/index.html'
    }
    let filePath = path.resolve(__dirname, `./${req.url}`);
    console.log(req.url)
    readFile(filePath).then((buffer) => {
        res.end(buffer)
    }).catch((err) => {
        res.writeHead(404, {
            'content-type': 'text/html;charset=utf8'
        });
        readFile(path.resolve(__dirname, `./public/404.html`)).then((buffer) => {
            res.end(buffer)
        })
    });
});
server.listen(3000)
console.log('http://localhost:3000')
