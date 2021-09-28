let numero = Number(prompt("De que número queres saber los pares/impares?"));
let pregunta = prompt("Indiqué si desea: Par - Impar - Ambos");
pregunta.toLocaleLowerCase();

function obtenerNumeroPar(par) {
  for (let i = 1; i <= par; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

function obtenerNumeroImpar(impar) {
  for (let i = 1; i <= impar; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

switch (pregunta) {
  case "par":
    obtenerNumeroPar(numero);
    console.log("-----------------");
    break;
  case "impar":
    obtenerNumeroImpar(numero);
    console.log("-----------------");
    break;
  case "ambos":
    obtenerNumeroPar(numero);
    console.log("-----------------");
    obtenerNumeroImpar(numero);
    console.log("-----------------");
    break;
}
