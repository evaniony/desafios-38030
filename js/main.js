
let pregunta = parseInt(prompt("Ingresa un numero menor de 10:"))
let pregunta2 = parseInt(prompt("Ingresa un numero diferente, pero menor de 5:"))

for(i = pregunta2; pregunta2 <= 5; pregunta2++){

    let resultado = pregunta * pregunta2;
    alert("Tu numeros se han incrementado!, ahora es: " + resultado);
}

let newNum = prompt("Recuerdas tus nuevos numeros?, elige uno e ingresalo")

while(newNum != "ESC"){
    alert("Tu numero era: " + newNum);
    newNum = prompt("Ingresa otro numero:");
}