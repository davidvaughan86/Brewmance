require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");
const VIEWS_PATH = path.join(__dirname, "/views");
const recipeRoutes = require("./routes/recipe-route");
const locateRoutes = require("./routes/locate");
const bodyParser = require("body-parser");

const mustacheExpress = require("mustache-express");
app.engine("mustache", mustacheExpress(VIEWS_PATH + "/partials", ".mustache"));
app.set("views", VIEWS_PATH);
app.set("view engine", "mustache");

app.use("/recipe", recipeRoutes);
app.use("/locate", locateRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/main", (req, res) => {
  res.render("main");
});

app.get("/history", (req, res) => {
  res.render("history");
});

app.listen(PORT || 3500, () => {
  console.log(`running on ${PORT}`);
});

console.log(process.env);
