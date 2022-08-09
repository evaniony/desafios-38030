
class Solicitante {
    constructor(id, nombre, importe){
        this.id = id;
        this.nombre = nombre;
        this.importe = importe;
    }
}

function legajo(){return parseInt(Math.random()*100000)};
function monto(){return parseInt(prompt("Monto mayor a $10.000: "));}

let listaPersonas = [];

function enListar(){
    let id = legajo();
    let nombre = prompt("Ingresa el nombre del solicitante: ");
    let importe = monto();
    listaPersonas.push(new Solicitante(id, nombre, importe));
    console.table(listaPersonas);
}

alert("Ingresa al menos 3 solicitantes!")
for(let i = 1; i <= 3; i++){
    enListar();

    if (listaPersonas !== null || NaN){
        alert("Por favor, completa el campo!")
    }
}

console.log("Tus registros son: ", listaPersonas.length);

