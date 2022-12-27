
let express = require("express");
const PORT = 3001;
let app = express();
let {Server: HttpServer} = require("http");
let serverRoutes = require("./routes");
let Socket = require("./Utils/sockets");

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // No olvidar  !!!

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views")

serverRoutes(app);
let httpServer = new HttpServer(app);
let socket = new Socket(httpServer);
socket.init()


httpServer.listen(PORT, ()=> console.log(`Server on http://localhost:${PORT}`));

