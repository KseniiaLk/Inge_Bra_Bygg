const bcrypt = require("bcryptjs");
const express = require('express');
const app = express();

app.listen(3000,function(){
    console.log("Server is running..")
});

const { User} = require("./models/index");


