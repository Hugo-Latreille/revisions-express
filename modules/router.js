// const express = require("express");
// const router = express.Router();

// const { users, articles } = require("./data");

// router.get("/", (req, res) => {
// 	const message = "un message envoyé par le serveur";

// 	const arguments = { message: message, users: users };

// 	res.render("index.ejs", arguments);
// 	//* = res.render("index.ejs", {message});
// });

// router.get("/articles", (req, res) => {
// 	res.render("articles.ejs", { articles });
// });

// router.get("/about", (req, res) => {
// 	const about = "A propos de nous";

// 	res.render("about.ejs", { about });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const { users, articles } = require("./data");
// index
router.get("/", (req, res) => {
	const message = "un message envoyé par le serveur";
	const args = {
		message: message,
		users: users,
		title: "Bienvenue",
		page: "index",
	};
	res.render("index.ejs", args);
});
// articles
router.get("/articles", (req, res) => {
	// reconstruire un tableau de data articles avec des slugs
	let articlesNew = [];
	articles.forEach((o_article) => {
		let articleSlug = o_article.title
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "");
		articleSlug = articleSlug.toLowerCase();
		articleSlug = articleSlug.replaceAll(" ", "-");
		o_article.slug = articleSlug;
		articlesNew.push(o_article);
	});
	console.log(articlesNew);
	const args = {
		title: "Articles",
		articles: articlesNew,
	};
	res.render("articles.ejs", args);
});
// 1 article
router.get("/articles/:id", (req, res) => {
	const articleId = parseInt(req.params.id);
	const articleFound = articles.find((article) => article.id === articleId);

	if (articleFound) {
		const args = {
			title: articleFound.title,
			contenu: articleFound.contenu,
		};
		res.render("readArticle.ejs", args);
	} else {
		res.redirect("/404");
	}
});

router.get("/about/", (req, res) => {
	const test = {
		about: "About",
	};
	res.render("about.ejs", test);
});
// 404
router.get("*", (req, res) => {
	const args = {
		title: "Erreur 404",
		page: "404",
	};
	res.status(404).render("404.ejs", args);
});
module.exports = router;
