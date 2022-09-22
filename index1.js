class Usuario{
    constructor(nombre = "", apellido ="", libros = [], mascotas = []){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this. mascotas = mascotas
    }
    getFullName(){
        return 'El nombre del usuario es: $(this.nombre) $(this.apellido)'
    }
    addBook(nombre, autor){
        this.libros.push({nombre, autor})
    }
    getBookNames(){
        return this.libros.map( libro => libro.nombre)
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
}


const newUser = new Usuario("Mili", "Ayunta")
console.log(newUser.getFullName())
newUser.addBook("Estudio en Rojo", "Arthur Conan Doyle")
console.log(newUser.getBookNames())