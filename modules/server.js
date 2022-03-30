const express = require("express");
const app = express();
const router = require("./router");
app.use(router);

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("assets"));

const server = app.listen(3000, () => {
	console.log("Serveur lancé sur http://localhost:3000");
});

module.exports = server;
