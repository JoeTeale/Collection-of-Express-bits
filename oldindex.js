// //const http = require('http');
// const path = require('path');
// const fs = require('fs');
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());


// app.get('/', function(req, res) {
//     res.sendFile(__dirname + "/" + "public/" + "index.html");
// });
// app.get('/login', function(req, res) {
//     let filePath = path.join(__dirname + "/" + "public/" + "login.html");
// let extname = path.extname(filePath);
// let contentType = "text/html";
// switch (extname) {
//     case ".js":
//       contentType = "text/javascript";
//       break;
//     case ".css":
//       contentType = "text/css";
//       break;
//     case ".json":
//       contentType = "application/json";
//       break;
//     case ".png":
//       contentType = "image/png";
//       break;
//     case ".jpg":
//       contentType = "image/jpg";
//       break;
//   }

//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             fs.readFile(path.join(__dirname, "public", "404.html"),
//                 (err, content) => {
//                     res.writeHead(404, { "Content-Type": "text/html" });
//                     res.end(content, "utf8");
//                 }
//             )
//         }
//         else {
//             // Success
//             res.writeHead(200, { "Content-Type": contentType });
//             res.end(content, "utf8");

//         }
//     })
// });

// app.post('/login', function(req, res){
//     response = {
//         first_name : req.body.username,
//         password : req.body.password
//         };
//         console.log(response);
// });
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running port ${PORT}`));

const http = require("http");
const path = require("path");
const fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.createServer((req,res) => 
 {

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Extension of file
  let extname = path.extname(filePath);

  // Initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Check if contentType is text/html but no .html file extension
  if (contentType == "text/html" && extname == "") filePath += ".html";

  // log the filePath
  console.log(filePath);

  // Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //  Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));