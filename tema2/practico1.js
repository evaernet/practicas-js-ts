// Crear un pequeño sistema que simule el registro y verificación de usuarios en una plataforma de contenido online.



let nombre = "Enzo";
let apellido = "Vaernet";
let edad = 34;
let email = "enzo@hotmail.com"
let activo = true
let puntaje = 75;

// suscripcion (string: "gratis" | "premium" | "vip")
let suscripcion = "premium";

//Suscripciones hecha con arrays
const susc = ["gratis", "premium", "vip"];

//Funciona para validar si esta incluido lo que agregarom 
function suscripA(suscripcion){
    return susc.includes(suscripcion)
}
console.log(susc);

//uso de funcion arroja true si esta incluida en el arrays de valores posibles de suscripcion
console.log(suscripA(suscripcion));


// obtenerNombreCompleto(nombre, apellido) → retorna string
function nombreCompleto(nombre, apellido){
    return (`${nombre} ${apellido}`);
}
console.log(nombreCompleto(nombre , apellido));


//funcion flecha
const nombreCom = (nombre, apellido) => `Nombre: ${nombre} Apellido: ${apellido}`;
console.log(`${nombreCom(nombre, apellido)}`);

// calcularNacimiento(edad) → retorna número (año de nacimiento)
function calcularNac(edad){
    if(edad<0){
        return 'Edad invalida'
    }else{
        let anio = new Date().getFullYear()-edad;

    return (`${anio}`);
    }
    
}
console.log(calcularNac(edad));

//Funcion flecha 
const calcuNac = (edad) => {

    if(edad<0){
        return 'Edad invalida'
    }else{
        let anio = new Date().getFullYear()-edad
        return anio
    }

}
console.log(calcuNac(edad));

//Version resumida
const calNac = (edad) => new Date().getFullYear() -edad ;

console.log(calNac(edad));

// validarEmail(email) → retorna booleano
function validarEmail(email){
    return email.length>10 && email.includes("@") && email.includes(".");
     
 }

 console.log(`El email es valido `, validarEmail(email));

 //funcion flecha
 const valEmail = (email) => email.length>10 && email.includes("@") && email.includes(".");
 console.log(valEmail(email));


// puedeAcceder(edad, activo, puntaje, suscripcion) → retorna booleano
function puedeAcceder(edad, activo, puntaje, suscripcion){
    return edad>=18 && activo===true && puntaje>=70 && (suscripcion==="premium" || suscripcion==="vip");
}

console.log(`Puede acceder al contenido exclusivo: `, puedeAcceder(edad, activo, puntaje, suscripcion));

//funcion flecha
const puedAcce = (edad, activo, puntaje, suscripcion) =>   `La persona puede acceder al contenido exclusivo: ${edad >= 18 && activo && puntaje >= 70 && (suscripcion === "premium" || suscripcion === "vip")}`;

console.log(puedAcce(edad,activo,puntaje,suscripcion));

// clasificarSuscripcion(suscripcion) → muestra beneficios (usá switch)

function clasificarSuscripcion(suscripcion){
    
    switch(suscripcion){
        case "vip":
            return "Acceso a total a la plataforma";  
        case "premium":
            return "acceso excluivo"
        case "Gratis":
            return "Acceso parcial a la plataforma"
        default:
            return "Acceso denegado"
    }
}

//puedo hacerlo asi con ' ' pero lo que retorna tiene que ir ${}
console.log(`Beneficio: ${clasificarSuscripcion(suscripcion)}`)

// o entre ""

console.log("Beneficio: ", clasificarSuscripcion(suscripcion));

//Funcio flecha
const clasiSus = (suscripcion) => {
    switch(suscripcion){
        case "vip":
            return "Acceso total a la plataforma";  
        case "premium":
            return "acceso exclusivo"
        case "Gratis":
            return "Acceso parcial a la plataforma"
        default:
            return "Acceso denegado"
    }
    
}


console.log(clasiSus(suscripcion));


// Bonus:

// Agregá una función mostrarResumen() que use todas las funciones anteriores y muestre un resumen completo del usuario con sus datos, año de nacimiento, estado de acceso y beneficios según su suscripción.

function mostrarResumen(nombre, apellido, edad, email, puntaje, suscripcion){
    return (`Nombre: ${nombreCompleto(nombre, apellido)} su año de nacimiento es: ${calcularNac(edad)} el email es: ${validarEmail(email)}, el puntaje es: ${puntaje} su clasificaion : ${clasificarSuscripcion(suscripcion)}`)
}

console.log(`DATOS: ${mostrarResumen(nombre, apellido, edad, email, puntaje, suscripcion)}`);


function mostrarResumen(nombre, apellido, edad, email, puntaje, suscripcion) {
    const nombreComp = nombreCompleto(nombre, apellido);
    const anioNacimiento = calcularNac(edad);
    const emailValido = validarEmail(email) ? "válido" : "inválido";
    const beneficio = clasificarSuscripcion(suscripcion);
    const puedeVerContenido = puedeAcceder(edad, true, puntaje, suscripcion) ? "Sí" : "No";

    return `
--- Resumen del usuario ---
👤 Nombre: ${nombreComp}
📅 Año de nacimiento: ${anioNacimiento}
📧 Email: ${email} (${emailValido})
🏆 Puntaje: ${puntaje}
🔐 Acceso a contenido exclusivo: ${puedeVerContenido}
🎁 Beneficio: ${beneficio}
----------------------------
    `;
}

console.log(mostrarResumen(nombre, apellido, edad, email, puntaje, suscripcion));
