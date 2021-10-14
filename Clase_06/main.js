const ordenarNumeros = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste numeros");

  if (numero.length === 0) return console.error("el arreglo esta vacio");

  for (let num of numero) {
    if (typeof num !== "number")
      return console.error(`el valor ${num} no es un numero`);
  }

  return console.log({
    ascendente: [numero.map((el) => el).sort((a, b) => a - b)],
    descendente: [numero.map((el) => el).sort((a, b) => b - a)],
  });
};

const numeros = [];
let pregunta1;
do {
  pregunta1 = prompt("Queres ordenar números? SI , NO");
  if (pregunta1 === undefined || pregunta1 === null) {
    alert("No ingresaste nada...");
    break;
  }
  pregunta1.toLowerCase();
  if (pregunta1 === "no") break;
  else {
    const pregunta2 = Number(prompt("Ingresé los números a ordenar:"));
    numeros.push(pregunta2);
  }
} while (pregunta1 != "no");

ordenarNumeros(numeros);
