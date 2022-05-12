const express = require('express');
const routes = require ("./routes");
const Auth = require('../middleware/auth');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/user", routes.user);
app.use("/api/tasks",routes.tasks);
app.use("api/image",routes.image);

app.listen(3000,function(){
    console.log("Server is running..")
});




