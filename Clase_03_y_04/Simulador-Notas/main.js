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

const d = document;
const $listaNotas = d.querySelector("#lista-notas");
const $nombre = d.querySelector("#nombre");
const $nota = d.querySelector("#nota");
const $btnAgregar = d.querySelector("#btn-agregar");
const $btnReiniciar = d.querySelector("#btn-reiniciar");
const $btnCalcular = d.querySelector("#calcular-notas");

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
    let aprobado = alumno.aprobado;
    if (aprobado) {
      const $div = d.createElement("div");
      $div.className = "aprobado";
      const $aprobados = d.querySelector("#aprobados");
      $div.innerHTML = `<p>Alumno ${alumno.nombre} va a final. </p>
      `;
      $aprobados.appendChild($div);
    } else {
      const $div = d.createElement("div");
      $div.className = "desaprobado";
      const $desaprobados = d.querySelector("#desaprobados");
      $div.innerHTML = `<p>Alumno ${alumno.nombre} tiene que recuperar. </p>
      `;
      $desaprobados.appendChild($div);
    }
  }
};

$btnAgregar.addEventListener("click", (e) => {
  e.preventDefault();
  const nombre = validarNombre($nombre);
  if (!nombre) {
    const notasAgregar = new Notas($nombre.value, $nota.value);
    agregarNotas(notasAgregar);
    ejecutarAprobar(notasAgregar);
    mostrarAlumnos(notasAgregar);
    mostrarBtn(".btn-calculo");
    limpiarInputs($nombre, $nota);
  }
});

$btnCalcular.addEventListener("click", (e) => {
  mostrarBtn(".calculo-notas");
  obtenerAlumnosAprobados(notas);
});

$btnReiniciar.addEventListener("click", (e) => {
  ocultarBtn(".btn-calculo");
  borrarNotas();
});

const validarNombre = (nombre) => {
  if (nombre.value === "") {
    alert("Ingresá un nombre valido");
    return true;
  }
};
const limpiarInputs = (nombre, nota) => {
  nombre.value = "";
  nota.value = "";
};
const ejecutarAprobar = (notas) => {
  notas.aprobar();
};

const mostrarAlumnos = (notas) => {
  let notaLi = d.createElement("li");
  notaLi.textContent = `Alumno: ${notas.nombre} --Nota: ${notas.nota} --Aprobado: ${notas.aprobado}`;
  notaLi.className = "nota-li";
  $listaNotas.appendChild(notaLi);
};

const mostrarBtn = (id) => {
  let btn = d.querySelector(id);
  btn.classList.remove("oculto");
};

const ocultarBtn = (id) => {
  let btn = d.querySelector(id);
  btn.classList.add("oculto");
};

const borrarNotas = () => {
  const $notasBorrar = d.querySelectorAll(".nota-li");
  for (let i = 0; i < $notasBorrar.length; i++) {
    $notasBorrar[i].remove();
  }
};
