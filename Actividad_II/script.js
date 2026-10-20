function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const titulo = document.getElementById("titulo");
titulo.textContent = "¡Manipulación del DOM!";

const parrafos = document.querySelectorAll(".parrafo");
parrafos.forEach((parrafo) => {
  parrafo.style.color = "blue";
});
const primerElemento = document.querySelector("#lista li");
primerElemento.textContent = "Elemento Modificado";

const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento 3";
const lista = document.getElementById("lista");
lista.appendChild(nuevoElemento);

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un párrafo nuevo";
parrafos[1].after(nuevoParrafo);

lista.children[1].remove();

const buttonListener = document.getElementById("boton");
buttonListener.addEventListener("click", () => {
  const nuevoColor = getRandomColor();
  document.body.style.backgroundColor = nuevoColor;
});

titulo.style.fontSize = "48px";

parrafos.item(0).style.border = "2px solid red";

lista.querySelectorAll("li").forEach((item) => {
  item.style.display = "inline-block";
});
