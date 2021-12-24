//requires
var express = require('express');
var path = require('path');
var session = require("express-session");
var passport = require("./config/passport");

const sequelize = require("./config/config")
const app = express();
const PORT = process.env.PORT || 3080;

//enable JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/api", require('./routes')) 

//start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});