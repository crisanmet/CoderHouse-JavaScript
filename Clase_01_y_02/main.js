alert("¡Bienvendino al Bar de Coder! Para poder ingresar debe ser mayor de 18");

let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad:"));
let limiteEdad = 18;

if (edad >= limiteEdad) {
  alert(`Bienvenido ${nombre}! Podes ingresar!`);
} else {
  alert(
    `Lo sentimos, ${nombre}. Sos menor de edad. Volvé en ${
      limiteEdad - edad
    } años`
  );
}
