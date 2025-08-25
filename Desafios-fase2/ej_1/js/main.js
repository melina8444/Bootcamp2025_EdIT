const colores = [
    "red", "green", "blue", "black"
]

let indice = 0;

const botones = document.querySelectorAll("button");
const tituloColor = document.querySelector("main h2");
const main = document.querySelector("main");

const cambiarColor = () => {
    main.style.backgroundColor = colores[indice];
    tituloColor.textContent = colores[indice];
};

botones[0].addEventListener("click", () => {
    indice = (indice - 1 + colores.length) % colores.length;
    cambiarColor();
});

botones[1].addEventListener("click", () => {
    indice = (indice + 1) % colores.length;
    cambiarColor();
});

cambiarColor();