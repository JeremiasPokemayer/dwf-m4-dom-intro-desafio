const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEl = document.querySelector(".lista");
  const listaEls = document.querySelectorAll(".lista li");
  for (let el of listaEls) {
    el.remove();
  }

  for (let element of cosasQueAprendimos) {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = element.tema;
    newLiEl.classList.add(element.class || "item");
    listaEl.appendChild(newLiEl);
  }
}

main();
