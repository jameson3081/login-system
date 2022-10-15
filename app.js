const express = require('express');
const path =require ('path');
const app = express();
const cookie = require('cookie-parser')



//register view engine EJS
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use("/js", express.static(__dirname + "/SimplyTasty/js"))
app.use("/css", express.static(__dirname + "/SimplyTasty/css"))
app.use(cookie());
app.use(express.json());
app.use("/", require("./routes/pages"));
//app.use("/api", require("./controllers/auth"));
//app.use("/api", require("./controllers/register"));


//SERVER INIT
app.listen(3000, function(err){
    if(err) throw error
    console.log("server running at port 3000...")
})

