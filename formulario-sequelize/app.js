const express = require("express")
const app = express()

const handlebars = require("express-handlebars").engine

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/", function(req, res){
    res.render("primeira-pagina")
})

app.listen(8082, function(){
    console.log("Servidor Ativo")
})