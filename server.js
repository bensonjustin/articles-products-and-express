const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const app = express();

app.use(methodOverride("_method"));
const productsRoutes = require("./routes/products");
const articlesRoutes = require("./routes/articles");

app.use(bodyParser.urlencoded({ extended: false }));
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  res.render("psandas");
});

app.use("/products", productsRoutes);
app.use("/articles", articlesRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
