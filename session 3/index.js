// const sum = (a, b) => {
//   return a + b;
// };

// module.exports = sum;

const fs = require("fs");

// read file
// const content = fs.readFile("./text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(data);
// });

// writefile
// const content2 = fs.writeFile("./another.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(data);
// });

// console.log("this will run first");

// -------------------

const path = require("path");

// console.log(__dirname); //-> directory
// console.log(__filename); //-> directory

// console.log(path.basename(__filename)); //-> index.js
// console.log(path.dirname(__filename)); //-> index.js
// console.log(path.extname(__filename)); //-> index.js

// ------------------------------------

const os = require("os");

// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.machine());

const url = require("url");

const http = require("http");

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to the homepage");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to the aboutt page");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });

    res.end("not found");
  }
});

app.listen(3000, () => {
  console.log("server is running");
});

// ---------------
// third party packages
