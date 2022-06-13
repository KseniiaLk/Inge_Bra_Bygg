const express = require('express');
const routes = require ("./routes");
const fileUpload = require('express-fileupload')
//const Auth = require('../middleware/auth'); - behövs detta här??


const app = express();

// enable files upload
app.use( express.static('public') );

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({useTempFiles: true}));

app.use("/api/user", routes.user);
app.use("/api/tasks",routes.tasks);
app.use("/api/image",routes.image);

app.listen(3000,function(){
    console.log("Server is running..")
});




