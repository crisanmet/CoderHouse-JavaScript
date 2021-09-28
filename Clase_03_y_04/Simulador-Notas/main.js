let ingresoNotas = Number(prompt("Ingresé la Cantidad de Alumnos a calcular:"));
let notas = [];
let contadorNotas = 0;

for (let i = 1; i <= ingresoNotas; i++) {
  let pregunta = Number(prompt(`Nota del Alumno Nro ${i}: `));
  notas.push(pregunta);
  contadorNotas += pregunta;
}

function obtenerNotaMayor(numero) {
  let notaMayor = 0;
  let flag = 0;
  for (let i = 0; i < notas.length; i++ || flag === 0) {
    if (numero[i] > notaMayor) {
      notaMayor = numero[i];
      flag = 1;
    }
  }
  return notaMayor;
}

function obtenerNotaMenor(numero) {
  let notaMenor = 0;
  let flag = 0;
  for (let i = 0; i < notas.length; i++) {
    if (numero[i] < notaMenor || flag === 0) {
      notaMenor = numero[i];
      flag = 1;
    }
  }
  return notaMenor;
}

function obtenerPromedio(numero) {
  return contadorNotas / notas.length;
}

alert("Mira los resultados por consola!");
const mostrarNotaMayor = obtenerNotaMayor(notas);
console.log(`La nota mayor es: ${mostrarNotaMayor} `);

const mostrarNotaMenor = obtenerNotaMenor(notas);
console.log(`La nota menor es: ${mostrarNotaMenor}`);

const mostrarPromedio = obtenerPromedio(notas);
console.log(`El promedio de notas es de: ${mostrarPromedio}`);
