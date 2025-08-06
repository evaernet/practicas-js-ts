// Enunciado:
// Declarar variables con let y const (evitá var):

// nombre (string)

let nombre : string ="Enzo";

// edad (number)

let edad: number = 34

// email (string)

let mail: string = "enzo@hotmail.com"

// pais (string)

const pais: string = "Argentina";

// activo (boolean)

let activo: boolean = true;

// puntaje (number)

let puntaje: number = 75;

// suscripcion (string) - puede ser: "gratis", "premium" o "vip"

let suscripcion= "premium";

// Operaciones y verificaciones:

// Calculá el año de nacimiento (con año actual - edad).

let fechaAct= new Date();
let anioAct = fechaAct.getFullYear();
let anioNac = anioAct-edad;


// Verificá si el email contiene "@" y "." usando operadores lógicos.

let contiene = mail.includes("@") && mail.includes(".");
console.log(contiene)

// Evaluá si el usuario puede acceder a contenido exclusivo:

// Si activo es true, y

// edad mayor a 18, y

// puntaje mayor o igual a 70, o la suscripción es "premium" o "vip".

// Condicionales:

// Si el usuario cumple todo lo anterior, mostrar:
// "Acceso concedido a contenido exclusivo."

// Si no cumple, mostrar un mensaje diferente según el caso usando if, else if, else.

// if(activo===true && edad>=18 && puntaje>=100 || (suscripcion==="premium" || suscripcion==="vip")){


let exclusivo = false;
if(activo===true && edad>=18 && (puntaje>=70 ||(suscripcion==="premium" || suscripcion==="vip") )){
    exclusivo = true;
}

console.log(exclusivo);


// Operador ternario:

// Mostrá si el usuario está activo o inactivo en una línea con ternario.

let activos = activo === true ? "Usuario activo " : "Usuario inactivo";

console.log(activos);

// typeof y valores especiales:

console.log("Tipos de variables: ")
console.log("--------------")

console.log(` nombre: ${typeof nombre} edad: ${typeof edad} activo: ${typeof activo}`)

// Imprimí el tipo de cada variable.

// Sumá una línea con una variable let saldo = null; y let progreso; (undefined).

let saldo = null;
let progreso = undefined;

// Intentá sumar "10" + 5 y mostrala como resultadoNaN, luego convertí a number y corregilo.

let suma = "10" + 5;
console.log(suma);
let sumacorregida = 10 +5 ;
console.log(sumacorregida);


// Agregar el switch para clasificar la suscripción.

// Imprimir los beneficios según el caso.

// Dejar el resto igual o ajustar los textos para que quede más prolijo.

switch(suscripcion.toLowerCase()){
    case "premium":
        console.log("Acceso total a la platafomra");
        break;
    case "estandar":
        console.log("Acceso parcial a la plataforma")
        break;
    case "vip":
        console.log("Acceso total y exclusio de la plataforma")
    default:
        console.log("No accees")
        break;
}
