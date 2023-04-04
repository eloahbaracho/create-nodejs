const express = require("express")
const app = express()

const handlebars = require("express-handlebars").engine

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/", function(req, res){
    res.render("primeira-pagina")
})
app.post("/cadastrar", function(req, res){
res.send("nome: " + req.body.nome)
})

app.listen(8082, function(){
    console.log("Servidor Ativo")
})

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false})) 
app.set(bodyParser.json())

app.post = require("./models/post")