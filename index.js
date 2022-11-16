
let express = require("express");
const PORT = 8080;
let app = express();


app.get("/", (req , res)=>{
    res.send("Buenas Buenas !");
})

app.listen(PORT, ()=> console.log(`Server on http://localhost:${PORT}`));