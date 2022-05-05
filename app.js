const bcrypt = require("bcryptjs");
const express = require('express');

const { User} = require("./models/index");

const app = express();

app.listen(3000,function(){
    console.log("Server is running..")
});




