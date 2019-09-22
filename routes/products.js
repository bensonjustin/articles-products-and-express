const express = require("express");
const router = express.Router();
const collection = require("../db/products.js");

let msg = {};

router.get("/", (req, res) => {
  let allProducts = collection.all();
  msg = {};
  if (allProducts.length < 1) {
    msg.errorMessage = "No products currently";
  }
  res.render("products", { products: allProducts, error: msg });
});

let msgP = {};

router.post("/", (req, res) => {
  if (!req.body.name || !req.body.price || !req.body.inventory) {
    res.redirect("/products/new");
    msgP.errorMessage = "Fill out all information";
  } else if (collection.exists(req.body.name)) {
    let currentProduct = collection.exists(req.body.name);
    res.redirect(`/products/edit/${currentProduct.id}`);
  } else {
    msgP = {};
    collection.add(req.body);
    res.redirect("/products");
  }
});

router.get("/new", (req, res) => {
  if (!msgP) {
    res.render("new", { error: msgP });
  } else {
    res.render("new", { error: msgP });
  }
});

router.get("/edit/:id", (req, res) => {
  let currentProduct = collection.current(req.params.id);
  res.render("edit", { product: currentProduct });
});

router.put("/:id", (req, res) => {
  collection.edit(req.params.id, req.body);
  res.redirect("/products");
});

router.delete("/:id", (req, res) => {
  collection.remove(req.params.id);
  res.redirect("/products");
});

module.exports = router;
