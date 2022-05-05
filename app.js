const bcrypt = require("bcryptjs");
const express = require('express');

const { User} = require("./models/index");

const app = express();
const routes = require ("./routes");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/api/user", routes.user);
app.use("/api/tasks",routes.tasks);

app.listen(3000,function(){
    console.log("Server is running..")
});




