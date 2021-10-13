// let ingresoNotas = Number(prompt("Ingresé la Cantidad de Alumnos a calcular:"));
// let notas = [];
// let contadorNotas = 0;

// for (let i = 1; i <= ingresoNotas; i++) {
//   let pregunta = Number(prompt(`Nota del Alumno Nro ${i}: `));
//   notas.push(pregunta);
//   contadorNotas += pregunta;
// }

// function obtenerNotaMayor(numero) {
//   let notaMayor = 0;
//   let flag = 0;
//   for (let i = 0; i < notas.length; i++ || flag === 0) {
//     if (numero[i] > notaMayor) {
//       notaMayor = numero[i];
//       flag = 1;
//     }
//   }
//   return notaMayor;
// }

// function obtenerNotaMenor(numero) {
//   let notaMenor = 0;
//   let flag = 0;
//   for (let i = 0; i < notas.length; i++) {
//     if (numero[i] < notaMenor || flag === 0) {
//       notaMenor = numero[i];
//       flag = 1;
//     }
//   }
//   return notaMenor;
// }

// function obtenerPromedio(numero) {
//   return contadorNotas / numero.length;
// }

// alert("Mira los resultados por consola!");
// const mostrarNotaMayor = obtenerNotaMayor(notas);
// console.log(`La nota mayor es: ${mostrarNotaMayor} `);

// const mostrarNotaMenor = obtenerNotaMenor(notas);
// console.log(`La nota menor es: ${mostrarNotaMenor}`);

// const mostrarPromedio = obtenerPromedio(notas);
// console.log(`El promedio de notas es de: ${mostrarPromedio}`);

//SIMULADOR CON CLASES

class Notas {
  constructor(nombre, nota) {
    this.nombre = nombre.toLowerCase();
    this.nota = nota;
    this.aprobado = false;
  }
  aprobar() {
    if (this.nota >= 7) {
      this.aprobado = true;
      return console.log(`${this.nombre}: aprobado`);
    } else {
      return console.log(`${this.nombre}: desaprobado`);
    }
  }
}

//INICIALIZO ARRAY
const notas = [];

const agregarNotas = (nota) => {
  notas.push(nota);
};

const buscarAlumno = (nombre) => {
  nombre.toLowerCase();
  let alumno;
  try {
    alumno = notas.find((alumno) => alumno.nombre === nombre);
    console.log(alumno);
    if (!alumno) {
      throw "No existe el alumno ingresado";
    }
  } catch (error) {
    console.log(error);
  }
};

const obtenerTodosAlumnos = (arr) => {
  arr.forEach((e) => console.log(e));
};

const obtenerAlumnosAprobados = (alumnos) => {
  for (const alumno of alumnos) {
    let nota = alumno.nota;
    if (nota >= 7) {
      console.log(`Alumno ${alumno.nombre}, Nota ${alumno.nota}`);
    }
  }
};

const nota1 = new Notas("Cristian", 10);
const nota2 = new Notas("Maria", 4);
const nota3 = new Notas("Hector", 2);
const nota4 = new Notas("Camila", 8);

agregarNotas(nota1);
agregarNotas(nota2);
agregarNotas(nota3);
agregarNotas(nota4);

console.log(notas);

nota1.aprobar();
nota2.aprobar();
nota3.aprobar();
nota4.aprobar();

buscarAlumno("cristian");
obtenerTodosAlumnos(notas);
obtenerAlumnosAprobados(notas);
