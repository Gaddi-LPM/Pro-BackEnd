let {Server: SocketIO} = require("socket.io");

class Socket {
    static instancia;
    constructor(http){
        if(Socket.instancia){
            return Socket.instancia
        }
        Socket.instancia = this;
        this.io = new SocketIO(http)
        this.mensaje = [];
        this.usuarios = [];
    }
    init(){
        try {
            this.io.on("connection", socket =>{
                this.io.sockets.emit("fillP", this.mensaje)
                console.log("usuario conectado") 
                socket.on("keyup", data => {
                    this.mensaje.push(data);
                    this.io.sockets.emit("fillP", this.mensaje)
                })  
            })
        } catch (error) {
            console.log(error);
        }
    }
}



module.exports = Socket