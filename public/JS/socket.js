
let socket = io()

let input = document.getElementById("text-chat");
let parrafo = document.getElementById("parrafo");
let email = document.getElementById("email");
let enviar = document.getElementById("enviar");

enviar.addEventListener("click",() =>{

    let fyh = new Date;
    let fyhMod = fyh.toLocaleString();
    let datosUser = { correo: email.value , texto: input.value, fyh: fyhMod };
    socket.emit("keyup",  datosUser);
    input.value = "";
    readSocket()
 })

function readSocket (){
    loadChat()
    socket.on("fillP", data =>{
        let algo = "";
         data.forEach(element => {
             algo += `<li><b>${element.correo}</b> [${element.fyh}] :${element.texto}</li> <br>`
         });
        parrafo.innerHTML = algo;
        }); 
}

function loadChat(){
    socket.on("fillP", data =>{
     loadData(data)
    })
}

function loadData (data) {
    let algo = "";
         data.forEach(element => {
             algo += `<li><b>${element.correo}</b> [${element.fyh}] :${element.texto}</li> <br>`
         });
        parrafo.innerHTML = algo;
        
}
