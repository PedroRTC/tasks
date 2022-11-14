let margenta = document.querySelector(".margenta");
let black = document.querySelector(".black");
let blue = document.querySelector(".blue");
let white = document.querySelector(".white");
let temaPrincipal = document.querySelector(".temaPrincipal");
let temaDestaques = document.querySelectorAll(".temaDestaques");
let colorTema = document.querySelectorAll(".colorTema");
let iconeTema = document.querySelectorAll(".iconeTema");
let temaButtonAgendar = document.querySelector(".temaButtonAgendar");

let backendTema = JSON.parse(localStorage.getItem("backendTema")) || [];

function temas() {


 

  backendTema.map((tema) => {
    temaPrincipal.style.background = tema.temaPrincipal;
    temaButtonAgendar.style.background = tema.iconeTema;

    for (const destaques of temaDestaques) {
      destaques.style.background = tema.temaDestaques;
      destaques.style.color = tema.colorTema;
    }

    for (const colorText of colorTema) {
      colorText.style.color = tema.colorTema;
    }

    for (const icone of iconeTema) {
      icone.style.color = tema.iconeTema;
    }
  });



  margenta.addEventListener("click", () => {
    novoTema = {
      temaPrincipal: "rgb(52, 0, 45)",
      temaDestaques: "rgb(65, 0, 56)",
      colorTema: "white",
      iconeTema: "deeppink",
    };

    backendTema.push(novoTema);
    localStorage.setItem("backendTema", JSON.stringify(backendTema)) || [];
    document.location.reload();
  });

  black.addEventListener("click", () => {
    novoTema = {
      temaPrincipal: "#222",
      temaDestaques: "#333",
      colorTema: "white",
      iconeTema: "gold",
    };

    backendTema.push(novoTema);
    localStorage.setItem("backendTema", JSON.stringify(backendTema)) || [];
    document.location.reload();
  });

  blue.addEventListener("click", () => {
    novoTema = {
      temaPrincipal: "#020f42",
      temaDestaques: "rgb(10, 10, 91)",
      colorTema: "white",
      iconeTema: "aqua",
    };

    backendTema.push(novoTema);
    localStorage.setItem("backendTema", JSON.stringify(backendTema)) || [];
    document.location.reload();
  });

  white.addEventListener("click", () => {
    novoTema = {
      temaPrincipal: "",
      temaDestaques: "ghostwhite",
      colorTema: "",
      iconeTema: "",
    };

    backendTema.push(novoTema);
    localStorage.setItem("backendTema", JSON.stringify(backendTema)) || [];
    document.location.reload();
  });
  
}

temas();
