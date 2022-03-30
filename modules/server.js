// const express = require("express");
// const app = express();
// const router = require("./router");
// app.use(router);

// app.set("view engine", "ejs");
// app.set("views", "views");

// app.use(express.static("assets"));

// const server = app.listen(3000, () => {
// 	console.log("Serveur lancé sur http://localhost:3000");
// });

// module.exports = server;

const express = require("express");
const app = express();
const router = require("./router");
const path = require("path");
// var p = require('path');
// console.log(p.resolve('assets/'));
// ou sont les fichiers statics ?
// app.use(express.static(__dirname + 'assets'));
// app.use(express.static( p.resolve('assets/') ));
// console.log(express.static);
app.use(express.static("assets"));
app.use(router);
// Cannot find module 'html'
// On dit a express que le rendu des fichiers sera fait avec ejs
app.set("view engine", "ejs");
// On dit a express où trouver les vues
app.set("views", "views");
const server = app.listen(3000, () => {
	console.log("Listening on http://localhost:3000");
});
module.exports = server;
