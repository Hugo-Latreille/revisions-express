const express = require("express");
const router = express.Router();

const { users, articles } = require("./data");

router.get("/", (req, res) => {
	const message = "un message envoyé par le serveur";

	const arguments = { message: message, users: users };

	res.render("index.ejs", arguments);
	//* = res.render("index.ejs", {message});
});

router.get("/articles", (req, res) => {
	res.render("articles.ejs", { articles });
});

router.get("/about", (req, res) => {
	const about = "A propos de nous";

	res.render("about.ejs", { about });
});

module.exports = router;
