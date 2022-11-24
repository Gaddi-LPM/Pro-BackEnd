
let express = require("express");
let fs = require("fs")
const PORT = 8080;
let app = express();


let datos = fs.readFileSync("./productos.txt", "utf-8");
let producto = JSON.parse(datos)

let proRandom = Math.floor(Math.random() * producto.length)
let proAleatorio = producto[proRandom]
console.log(proAleatorio);


app.get("/", (req , res)=>{
    res.send(`<h1 style = "color: green"> Welcome to my Server </h1>`);
})

app.get("/productos", (req , res)=>{
    res.send(producto);

})
 
app.get("/productoRandom", (req , res)=>{
    res.send(proAleatorio);
})

app.listen(PORT, ()=> console.log(`Server on http://localhost:${PORT}`));