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

app.post("/create", (req, res) => {
  let { username, password, email, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      console.log(hash);
      let createdUser = await userModel.create({
        username,
        password: hash,
        email,
        age,
      });

      let token = jwt.sign({ email }, "secret");
      res.cookie("token", token);
      res.send(createdUser);
    });
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email });

    bcrypt.compare(req.body.password, user.password, (err, result) => {

        if(result) res.send('yes you can login')
            else res.send('Something went wrong')
    });
});





app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

app.listen(3000);
