const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

//Define paths for Express config
const publicDirectory = path.join(__dirname, "..", "public");
const templateDirectory = path.join(__dirname, "../../templates/views");
const partialsDirectory = path.join(__dirname, "../../templates/partials");

//setup handlebars engine and views
app.set("view engine", "hbs");
app.set("views", templateDirectory);
hbs.registerPartials(partialsDirectory);
//setup static directory to serve
app.use(express.static(publicDirectory));

const obj = {
  location: "Maryland",
  name: "Tim",
};

app.get("/", (req, res) => {
  res.render("index", {
    title: "weather app",
    name: "Joe",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Joe",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "help page",
    name: "Joe",
  });
});

//json response - send back object
app.get("/weather", (req, res) => {
  res.send(obj);
});

app.get('/help/*', (req, res) => {
  res.render('notfound', {
    text: "Article could not be found"
  })
})

app.get('*', (req, res) => {
  res.rednder('notfound', {
    text: "Help article could not be found"
  })
});

app.listen(3000, () => {
  console.log("listening on PORT " + 3000);
});
