const http = require("http");
const fs = require('fs').promises;
const host = 'localhost';
const port = 8000;
const path = require('path');

// ARRIVE 2 REQUESTS:
// - "/" -> return the index.html file
// - "/favicon.ico" -> directly requested by the browser, will be returned the ico but the second time it does the request return 500
//                      because the code above add "index.html" to each requests.

const requestListener = function (req, res) {
	console.log("Richiesta ", req.url);
	let filePath = path.join(__dirname, req.url);
    fs.readFile(filePath + "index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err.message);
            return;
        });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});