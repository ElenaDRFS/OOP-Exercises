// Crear nueva persona

// let Persona = function (nombre, edad, genero) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.genero = genero;
//     this.detalles = function obtenerDetalles(){
//       console.log("Tu nombre es "+this.nombre+", con "+this.edad+" años, y género "+this.genero)
//     }
// };


// ES6
class Persona{
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    detalles() {
        console.log("Tu nombre es "+this.nombre+", con "+this.edad+" años, y género "+this.genero);
    }
  }
  
// let nuevaPersona = new Persona("Elena", 22, "femenino");
// nuevaPersona.detalles()


// Estudiante
class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
      super(nombre, edad, genero); // Llama al constructor del padre y le pasa su parámetro
      this.curso = curso;
      this.grupo = grupo;
    }
    registrar() {
        console.log(`Nombre: ${this.nombre}, curso: ${this.curso}, grupo: ${this.grupo}`);
    }
  }

// let nuevoEstudiante = new Estudiante("Elena", 22, "femenenino", "1ºESO", "A");
// nuevoEstudiante.registrar()



// Profesor
class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero); // Llama al constructor del padre y le pasa su parámetro
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  asignar() {
      console.log(`Nombre: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}, asignatura: ${this.asignatura}, nivel: ${this.nivel}`);
  }
}

// let nuevoProfesor = new Profesor("Elena", 22, "femenenino", "Inglés", "C8000");
// nuevoProfesor.asignar()