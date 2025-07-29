// Crear una variable nombre (string).
let nombre = "Enzo";

// Crear una variable apellido (string).
let apellido  ="Vaernet";

// Crear una variable edad (number).
let edad = 34;

// Crear una variable trabajaActualmente (boolean).
let trabajaActualmente = true;

// Calcular:

// El año de nacimiento.

// Si es mayor de edad.

// Su nombre completo (nombre + apellido).

// Mostrar un resumen con todo eso, usando console.log y template literals.

//guardo la fecha de hoy en una instancia
const fechaActual = new Date();
//en otra variable, tomando el objeto anterior solo extraigo el año
const anioActual = fechaActual.getFullYear();

console.log(`La persona ${nombre +' '+ apellido} año de nacimiento ${anioActual-edad}, el estado actual laboral es ${trabajaActualmente} `);
