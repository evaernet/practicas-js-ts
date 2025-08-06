let nombre: string ="Enzo";
let apellido: string="Vaernet";
let edad: number = 34;
let trabajaActual: boolean = true;

let anio = new Date();
let anioActual = anio.getFullYear();

let trabajo = trabajaActual === true ?"Activo" : "Desempleado";

console.log(`La persona ${nombre +' '+ apellido} nacido en el año ${anioActual-edad} y su estado laboral es: ${trabajo}, tipo de variable edad ${typeof edad}`);

