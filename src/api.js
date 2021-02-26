const express = require("express");
const serverless = require("serverless-http");
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();
const router = express.Router();
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', (req, res) => {
    res.render("index");
})

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
