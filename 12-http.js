const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/'){
        res.end('Welcome to our home page.');
    }
    else if(req.url === '/about'){
        res.end('Here is our shop');
    }
    else{res.end(`<h1>Oops!</h1>
    <p>We cant seem to find the page</p>
    <a href="/">back home</a>`);
}
})

server.listen(5000);



