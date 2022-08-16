

function saludar(){
    let textoEntrada = prompt("Ingresa tu nombre:");
    let titulo = document.getElementById("text-dinamico");
        titulo.innerText = `Bienvenid@ ${textoEntrada}!`;

}
saludar();

function crearLista(){
let animales = ["Gatos", "Perros", "Conejos", "Peces", "Tortugas", "Hamsters"];

const lista = document.getElementById("lista");
    lista.innerHTML = `<h2>Creamos una lista dinamicamente:</h2>`

    animales.forEach(animal => {
        const li = document.createElement("li")
              li.innerHTML = animal;
              lista.append(li);
    })
}