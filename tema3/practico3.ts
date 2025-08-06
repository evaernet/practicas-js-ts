// Crear un programa que permita registrar, analizar y mostrar información sobre votantes.
// Cada votante tendrá:
// 🛠 Requisitos funcionales
// ✅ Registrar votantes (mínimo 5) con nombre, edad y opción elegida
// (guardalos en 3 arrays paralelos: nombres, edades, opciones)

//Creamos un enum para las opciones de voto
enum LISTAS {
    a ="A",
    b ="B",
    c ="C",
    ns = "NS"
}

let votantes: string[] =  ["javi", "enzo", "izan", "sara", "carmen"];
let edades: number[] = [16,18,25,35,45];
const opc: LISTAS[] = [LISTAS.a, LISTAS.a, LISTAS.c, LISTAS.b, LISTAS.ns];

//funcion para validar que la edad se mayor a 16 para pder votar 

function validarEdad(edade: number[], votante: string[]) : void{
    let posicion: number = 0;
    for(let edad of edade){
        if(edad >= 16){
            console.log(`Puede votar ${votante[posicion]}`)
        }else{
            console.log( `No puede votar ${votante[posicion]}`);
        }
        posicion++;
    }
}

validarEdad(edades, votantes);

// ✅ Mostrar cuántos votaron por cada opción (A, B, C, NS) usando switch

function cuantaVotos(op: LISTAS[]): void{

    let votoa: number=0;
    let votob: number=0;
    let votoc: number=0;
    let votons: number=0;

    for(let voto of op){
        switch(voto){
            case "A":
                votoa++;
                break;
            case "B":
                votob++;
                break;
            case "C":
                votoc++;
                break;
            case "NS":
                votons++;
                break;
        }
    }

    console.log(`Votantes lista A: ${votoa}`);
    console.log(`Votantes lista B: ${votob}`);
    console.log(`Votantes lista C: ${votoc}`);
    console.log(`Votantes lista NS: ${votons}`);

}

cuantaVotos(opc);

// ✅ Mostrar el promedio de edad de los votantes
function promedioEdad (edades: number[]): number{
    let promedio: number= 0;
    for(let edad of edades){
        promedio = edad+ promedio;
    }
    promedio = promedio/edades.length;
    return promedio;
}

console.log(`Promedio edad votantes ${promedioEdad(edades)}`)

// ✅ Mostrar la lista de votantes mayores de edad (18 o más)

function mostrarMayores(edad: number[], votante: string[]): string[]{
    let votantesMayores: string[] = [];
    for(let i=0; i<votante.length; i++){
        if(edad[i]>=18){

            votantesMayores.push(votantes[i]);
        }
    }
    return votantesMayores;
}

console.log(`Personas mayores de 18: ${mostrarMayores(edades, votantes)}`);


// ✅ Mostrar con un for...of todos los votantes con un saludo personalizado según edad:

// Menor de 18: "Gracias por tu participación, joven"

// Entre 18 y 50: "Gracias por tu voto"

// Mayor de 50: "Gracias por tu experiencia"

function saludoPersonalizado(edades: number[], votantes: string[]): void{
    for(let i=0; i<edades.length; i++){
        if(edades[i]<18){
            console.log("Gracias por participar, joven")

        }else if(edades[i]>=18 && edades[i]<50){
            console.log("Gracias por tu voto");
        }else{
            console.log("Gracias por tu experiencia");
        }
    }
}

saludoPersonalizado(edades, votantes);


// ✅ Crear una función que reciba una opción y devuelva el porcentaje de votos que obtuvo

function porcentajeVotos(opcion: string): number{
    let cantidadVotos: number=0;
    let promedio: number =0;

    for(let i=0; i<opc.length; i++){
        if(opc[i]===opcion){
            cantidadVotos++;
        }
    }

    promedio = cantidadVotos/opc.length;
    return promedio;
    
}

console.log(`Promedio votos: ${porcentajeVotos("A")}`)