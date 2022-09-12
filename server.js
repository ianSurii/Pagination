var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 80;
var hostname = 'vueapppro.herokuapp.com';

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });

// const express = require('express');
// const serveStatic = require("serve-static")
// const path = require('path');
// app = express();
// app.use(serveStatic(path.join(__dirname, 'index.html')));
// const port = process.env.PORT || 8082;
// app.listen(port);