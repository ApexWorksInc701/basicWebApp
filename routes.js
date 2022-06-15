// routes handling
const url = require('url'); //requiring url module
let fs = require('fs'); //requiring file structure module

// preparing for html render
html = {
    render(path, res) {
        fs.readFile(path, null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('file not found');
            } else {
                res.write(data);
            }
            res.end();
        });
    }
}

// request render
module.exports = {
    handleRequest(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        let path = url.parse(req.url).pathname;

        switch (path) {
            case '/':
                html.render('./static/index.html', res);
                break;
            case '/home':
                html.render('./static/index.html', res);
                break;
            case '/about':
                html.render('./static/about.html', res);
                break;
            case '/contact':
                html.render('./static/contact.html', res);
                break;
            default:
                res.writeHead(404);
                res.write('Route not found');
                res.end();
        }
    }
}