const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geoCode = require('../../utils/geocode')
const weather = require('../../utils/weather')

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
    title: "Weather App",
    name: "Joe",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Joe",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    name: "Joe",
  });
});

//json response - send back object
app.get("/weather", (req, response) => {
  const address = req.query.address
  geoCode(address, (err, res) => {
    const place = (res.other[0].place_name)
    const {latitude, longitude} = res
    weather(latitude, longitude, (err, res) => {
      response.send({
        res,
        place
      })
    })
  })
});

app.get('/help/*', (req, res) => {
  res.render('notfound', {
    text: "Article could not be found"
  })
})

app.get('*', (req, res) => {
  res.render('notfound', {
    text: "Help article could not be found"
  })
});

app.listen(3000, () => {
  console.log("listening on PORT " + 3000);
});
