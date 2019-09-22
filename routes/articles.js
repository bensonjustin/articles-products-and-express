const express = require("express");
const router = express.Router();
const collection = require("../db/articles.js");

let msg = {};

router.get("/", (req, res) => {
  let allArticles = collection.all();
  msg = {};
  if (allArticles.length < 1) {
    msg.errorMessage = "No articles currently";
  }
  res.render("articles", { articles: allArticles, error: msg });
});

let msgP = {};

router.post("/", (req, res) => {
  if (!req.body.title || !req.body.body || !req.body.author) {
    res.redirect("/articles/new");
    msgP.errorMessage = "Fill out all information";
  } else if (collection.exists(req.body.title)) {
    let currentArticle = collection.exists(req.body.title);
    res.redirect(`/articles/edit/${encodeURI(currentArticle)}`);
  } else {
    msgP = {};
    collection.add(req.body);
    res.redirect("/articles");
  }
});

router.get("/newA", (req, res) => {
  if (!msgP) {
    res.render("newA", { error: msgP });
  } else {
    res.render("newA", { error: msgP });
  }
});

router.get("/edit/:title", (req, res) => {
  let currentArticle = collection.current(req.params.encodeURI(title));
  res.render("edit", { article: currentArticle });
});

router.put("/:title", (req, res) => {
  collection.edit(req.params.encodeURI(title), req.body);
  res.redirect("/articles");
});

router.delete("/:title", (req, res) => {
  collection.remove(req.body.urlTitle);
  console.log(req.body.urlTitle);
  res.redirect("/articles");
});

module.exports = router;
