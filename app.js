require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const fs = require("fs"); // require filescreen for pulling html
const mustacheExpress = require("mustache-express");
const path = require("path");
const helmet = require("helmet");
const VIEWS_PATH = path.join(__dirname, "/views");
const recipeRoutes = require("./routes/recipe-route");
const locateRoutes = require("./routes/locate");
const bodyParser = require("body-parser");

app.engine("mustache", mustacheExpress(VIEWS_PATH + "/partials", ".mustache"));
app.set("views", VIEWS_PATH);
app.set("view engine", "mustache");

app.use("/recipe", recipeRoutes);
app.use("/locate", locateRoutes);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "/public")));

const external = path.join(__dirname, "/routes");

function test() {
  console.log("yes");
}
test();

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
