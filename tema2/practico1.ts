import { BlobOptions } from "buffer";



let nombre: string ="Enzo";
let apellido: string ="Vaernet";
let edad: number = 34;
let email: string = "enzo@hotmail.com";
let activo: boolean = true;
let puntaje: number = 75;
let suscripcion: string = "premium";

const suscripciones = ["premium", "gratis", "vip"];
enum susc{
    Premium = "premium",
    Gratis = "gratis",
    Vip = "vip",
}
//Funciones 

//Funcionar para validar que el tipo de suscripcion sea valido 
function suscripA(suscripcion: string): boolean{
    return suscripciones.includes(suscripcion);
}

console.log(suscripA(suscripcion));

const suscripB = (suscripcion: string): Boolean => suscripciones.includes(suscripcion);
console.log(suscripB(suscripcion));


//obtener nombre completo
function nombreC (nombre:string, apellido: string): string{
    return `Nombre: ${nombre} apeliido: ${apellido}`;
}

console.log(nombreC(nombre, apellido));

//funcion flecha 
const nombreFlecha = (nombre: string, apeliido: string): string => `Nombre ${nombre} apellido: ${apeliido}`;
console.log(nombreFlecha(nombre, apellido));


//calcular año de nacimiento. En este caso retorno un string, pero podria ser mas util un number para poder usarlo 
function calcularAnio(edad: number): String{

    if(edad<0){
        return `Edad invalida`
    }else{
        return `Año nacimiento: ${new Date().getFullYear()-edad}`
    }

}

console.log(calcularAnio(edad));


//Funcion flecha

const calcularEdadFlecha = (edad: number ) => new Date().getFullYear()-edad;

console.log(calcularEdadFlecha(edad));

//Validar email
function validarEmail(email: string): boolean{
    return email.includes("@") && email.includes(".") && email.length>10;

}

console.log(`EL mail es valido ?: ${validarEmail(email)}`);


const validarEmailFlecha =(email: string): boolean => email.includes("@") && email.includes(".") && email.length>10;

//funcion flecha

const validarMailFlecha = (email: string): boolean => email.includes("@") && email.includes(".") && email.length>10;

console.log(validarEmailFlecha(email));

//Verificacion de acceso 

function puedeAcceder (edad: number, activo: boolean, puntaje: number, suscripcion: string): boolean{
    return edad>18 && activo===true && puntaje>=75 && (suscripcion==="premium" || suscripcion==="vip");
}

if(puedeAcceder(edad, activo, puntaje, suscripcion)===true){
    console.log(`Tiene acceso exclsivo a la plataform `)
}else{
    console.log(`Tiene acceso restringido a la plataforma `)
}

//funcion flecha 

const puedeAccederFlecha = (edad: number, activo:boolean, puntaje: number, suscripcion: string): boolean => edad>=18 && activo===true && puntaje >= 75 && (suscripcion==="premium" || suscripcion==="vip")

console.log(puedeAcceder(edad,activo,puntaje, suscripcion));

// clasificarSuscripcion(suscripcion) → muestra beneficios (usá switch)

function clasificarSuscripcion(suscripcion: string): string {
    switch(suscripcion){
        case "premium":
            return `tiene acceso a la plataforma`;
            break;
        case "vip":
            return `tiene acceso total a la plataforma`;
            break;
        case "gratuito":
            return `Acesso restringido`
            break;
        default:
            return `No tiene acceso`
            break;
    }
}

console.log(clasificarSuscripcion(suscripcion));


//funcion flecha

const clasificarSuscripcionFlecha = (suscripcion: string): string => {
  switch (suscripcion) {
    case "vip":
      return "Acceso completo";
    case "premium":
      return "Acceso exclusivo";
    case "gratis":
      return "Acceso limitado";
    default:
      return "Sin acceso";
  }
};

console.log(clasificarSuscripcionFlecha(suscripcion));



// Agregá una función mostrarResumen() que use todas las funciones anteriores y muestre un resumen completo del usuario con sus datos, año de nacimiento, estado de acceso y beneficios según su suscripción.

function mostrarResumen(nombre:string, apeliido: string, suscripciones: string): string {
    return `${nombreC(nombre, apeliido)} alcance: ${clasificarSuscripcionFlecha(suscripcion)}`
}

console.log(mostrarResumen(nombre,apellido,suscripcion));