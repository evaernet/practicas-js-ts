// Crear un programa que permita registrar, analizar y mostrar información sobre votantes.
// Cada votante tendrá:
// 🛠 Requisitos funcionales
// ✅ Registrar votantes (mínimo 5) con nombre, edad y opción elegida
// (guardalos en 3 arrays paralelos: nombres, edades, opciones)

const OPCIONES = Object.freeze( {
    A: 'A',
    B: 'B',
    C: 'C',
    NS: 'NS'
});


let votantes = ["javi", "enzo", "izan", "sara", "carmen"];
let edades = [16,18,25,35,45];
const opc = [OPCIONES.A, OPCIONES.A, OPCIONES.B, OPCIONES.C, OPCIONES.NS];
const opc1=OPCIONES.A;
const opc2="J";



// ✅ Validar que:

// La edad sea mayor a 16 años para poder votar
const validarEdad=(edad) => edad>16;

console.log(validarEdad(edades[1]));

// La opción esté dentro de las válidas: "A", "B", "C", "NS"

function validarOpciones(opc){
    return Object.values(OPCIONES).includes(opc);
}

console.log(validarOpciones(opc2));

// ✅ Mostrar cuántos votaron por cada opción (A, B, C, NS) usando switch


function mostrarVotos(arraysvoto){

    let votoA=0;
    let votoB=0;
    let votoC=0;
    let votoNS=0;
    for(let i=0; i<arraysvoto.length; i++){
        switch(arraysvoto[i]){
            case "A":
                votoA++;
                break;
            case "B":
                votoB++;
                break;
            case "C":
                votoC++;
                break;
            case "NS":
                votoNS++;
                break;
        }
        
    }

    console.log(`Voto A: ${votoA}`);
    console.log(`Voto B: ${votoB}`);
    console.log(`Voto C: ${votoC}`);
    console.log(`Voto NS: ${votoNS}`);
    

}

mostrarVotos(opc);

// ✅ Mostrar el promedio de edad de los votantes

function edadVotantes(edade){
    let sumador = 0;
    for(let i=0; i<edade.length; i++){
        sumador = edade[i]+sumador;
    }
    let promedio = sumador/edade.length;
    return promedio;
}

console.log(`Promedio edad de votantes: ${edadVotantes(edades)} `);

// ✅ Mostrar la lista de votantes mayores de edad (18 o más)

function votantesMayores(edade, votant){

    for(let i =0; i<edade.length; i++){
        if(edade[i]>=18){
            console.log(votant[i])
        }
    }
}

votantesMayores(edades, votantes);

// ✅ Mostrar con un for...of todos los votantes con un saludo personalizado según edad:

// Menor de 18: "Gracias por tu participación, joven"

// Entre 18 y 50: "Gracias por tu voto"

// Mayor de 50: "Gracias por tu experiencia"

function saludoVotantes(edade, votant){
    let i = 0;
    for(edad of edade){

        if(edad<18){
            console.log(`Gracias por participar, joven: ${votant[i]}`)
        }else if(edad>= 18 && edade<=50){
            console.log(`Gracias por tu voto: ${votantes[i]}`)
        }
        else{
            console.log(`Gracias por tu experiencia ${votant[i]}`)
        }
        i++;
    }
}

saludoVotantes(edades, votantes);

// ✅ Crear una función que reciba una opción y devuelva el porcentaje de votos que obtuvo
function porcentajeVotos(opc){
    let a=0;
    let b=0;
    let c=0;
    let ns=0;
    promedioa=0;
    promediob=0;
    promediob=0;
    promedions=0;
    for(opciones of opc){
        switch(opciones){
            case "A":
                a=a+1
                break;
            case "B":
                b=b+1
                break;
            case "C":
                c=c+1;
                break;
            case "NS":
                ns=+1   
                break;   
        }
    }

    console.log(`Promedio votantes A ${promedioa=a/opc.length}`);
    console.log(`Promedio votantes B ${promediob=b/opc.length}`);
    console.log(`Promedio votantes C ${promedioc=c/opc.length}`);
    console.log(`Promedio votantes NS ${promedions=ns/opc.length}`);
    
}

porcentajeVotos(opc);

// ✅ BONUS: función que devuelva el nombre del votante más adulto

function edadMasAdulto(edade, votant) {
    let mayor = 0;
    let nombre = 0;

    {for(let i=0; i<edade.length;i++){
        if(edade[i]>mayor){
            nombre = i;
        }
    }

    let nombreMayor= votant[nombre];

    return `El votnte de mayor edad es: ${nombreMayor}`;

}
}

console.log(`${edadMasAdulto(edades, votantes)}`);