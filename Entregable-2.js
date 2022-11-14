
const FS = require("fs");

class Contenedor {
    constructor (){

        this.archivo = null
    }

    async save (nombre, precio){

        try {
            let id = Math.floor(Math.random()*10)
            let totalPro = [];
            totalPro.push ({id: id, title: nombre, price: precio})
            let productos =  JSON.stringify(totalPro, null , 2)
            let archivo = await FS.promises.appendFile("./productos.txt", productos);
            return console.log(`Se genero su producto con ID: ${id}`);
        } catch (error) {
            console.log(error)
        }
    }

    async getById (id){

        try {
            let datos = await FS.promises.readFile("./productos.txt", "utf-8");
            let objeto = JSON.parse(datos);
            if(id != NaN && id != undefined){
                let resul = objeto.find( item =>  item.id === id)
                console.log(resul);
            } else {
                console.log("El objeto no Existe");
            }
        } catch (error) {
            console.log(error)
        }
    }

   async getAll(){

        try {
            let datos = await FS.promises.readFile("./productos.txt", "utf-8");
            let array = JSON.parse(datos);
            return console.log("los productos son:",array);
        } catch (error) {
            console.log(error)
        }
    }

   async deleteById(id){

        try {
            let datos = await FS.promises.readFile("./productos.txt", "utf-8");
            let array = JSON.parse(datos);
            let position = array.findIndex( index => index.id === id)
            array.splice(position,position)
            let newData = await FS.promises.writeFile("./productos.txt", JSON.stringify(array, null, 2))
            console.log("Se ha Eliminado el Id del Archivo");
            
        } catch (error) {
            console.log(error) 
        }
    }

   async deleteAll(){

        try {
            let datos = await FS.promises.readFile("./productos.txt", "utf-8");
            let array = JSON.parse(datos);
            array.splice(0)
            let empty = await FS.promises.writeFile("./productos.txt", "Se han borrado los objetos", "utf-8")
            console.log("los bojetos se han borrado del archivo");
        } catch (error) {
            console.log(error)
        }
    }
    
}

let producto = new Contenedor("./productos.txt")


//producto.save("camison", 520)
//producto.save("buso", 220)
//producto.save("camisa", 250)

//producto.getById(1)

//producto.getAll()

//producto.deleteById(1)

//producto.deleteAll()


