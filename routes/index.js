
let {Router} = require("express");
let router = new Router();

let productosApi = require("../components/products")

module.exports = app => {

    productosApi(app);

    app.use("/", router);
    router.get("/", (req, res, next) => {
        res.send("WELCOME TO MY SERVER!!!")
    })
}