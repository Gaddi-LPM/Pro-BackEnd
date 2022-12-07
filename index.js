
let express = require("express");
const PORT = 3001;
let app = express();

let serverRoutes = require("./routes")

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // No olvidar  !!!

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views")

serverRoutes(app);

app.listen(PORT, ()=> console.log(`Server on http://localhost:${PORT}`));

