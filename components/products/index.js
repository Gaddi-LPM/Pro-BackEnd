
let {Router} = require("express");
let router = new Router();
let productos = require("./productos")

module.exports = app => {

    app.use("/productos", router);
    router.get("/", (req, res, next) =>{
        res.json(productos);
    });

    router.get("/:id", (req, res, next)=>{
         let params = req.params;
         let num = parseInt(params.id)
         let productoID = productos.find(item => item.id === num );
         productoID == undefined ? res.send({ERROR:"EL PRODUCTO NO EXISTE"}) : res.json(productoID);
       
    });

    router.post("/", (req, res, next)=>{
        let productoNuevo = req.body;
        productos.push({id: productos.length + 1, ...productoNuevo})
        res.json(productos);
    })

    app.put("/:id", (req, res, next)=>{
        let params = req.params;
        let num = parseInt(params.id)
        let index = productos.findIndex( index => index.id === num)
        let proMod = req.body;
        let objeto = {id: num, ...proMod};
        productos.splice(index, index, objeto)
        res.json(objeto);
    
    })

    router.delete("/:id", (req, res, next)=>{
        let params = req.params;
        let num = parseInt(params.id)
        let index = productos.findIndex( index => index.id === num)
        productos.splice(index, index)
        res.send("El producto ha sido Eliminado")
    
    })
    
}


