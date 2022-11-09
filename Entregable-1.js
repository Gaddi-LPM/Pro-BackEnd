
class Usuario {
    constructor (nombre , apellido , libros, mascotas){

        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas =[];
    }

    getFullName (){
         return console.log(`El nombre es ${this.nombre} y el apellido es ${this.apellido}`);
    }

    addMascota (mascota){
        this.mascotas.push(mascota)
        return console.log(`La mascota es un ${this.mascotas}`);
    }

    countMascotas (){
        return console.log(`El usuario tiene ${this.mascotas.length} mascota/s`);
    }

    addBoocks (nombre , autor){
        this.libros.push({
            nombre: nombre,
            autor: autor,
        })
        return console.log(`El nombre del libro es ${nombre} y el autor es ${autor}`);
    }

    getBooksName (){
        return console.log(`Los libros del usuario son ${this.libros.map(libro => libro.nombre)}`);
    }
}

let usuario_uno = new Usuario("Emily", "Navarro");

usuario_uno.getFullName()
usuario_uno.addMascota("perro")
usuario_uno.addMascota("gato")
usuario_uno.countMascotas()
usuario_uno.addBoocks("el señor de los anillos", "R.R. Tolkien")
usuario_uno.addBoocks("Cronica de una muerte anunciada", "Horacio Quiroga")
usuario_uno.getBooksName()

console.log(usuario_uno);

    
