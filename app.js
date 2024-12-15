const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => res.send("Hello, World!"));

app.listen(3000);