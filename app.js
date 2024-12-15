const express = require("express");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const app = express();
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("./models/user");


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
 
app.use(cookieParser());
app.get("/", (req, res) => res.render("index"));
app.post("/create", async (req, res) => {
    let {username, password,email,age} = req.body;
let createdUser = await userModel.create({
    username,
    password,
    email,
    age
});
});


app.listen(3000);
