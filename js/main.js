let listAgendados = document.querySelector(".agendados");
let form = document.querySelector(".formAgendar");
let buttonAgendar = document.querySelector(".buttonAgendar");
let buttonConfiguracao = document.querySelector(".configuracao");
let abaAgendados = document.querySelector(".abaAgendados");
let abaSobre = document.querySelector(".abaSobre");
let meusAgendamentos = document.querySelector(".meusAgendamentos");

let backendTarefas = JSON.parse(localStorage.getItem("backendTarefas")) || [];


buttonAgendar.addEventListener("click", backend);
function backend() {
  if (
    form.inputTitle.value == "" ||
    form.inputDes.value == "" ||
    form.inputDate.value == "" ||
    form.inputHrs.value == ""
  ) {
    alert("preencha os campos");
    form.inputTitle.focus();
  } else {
    const novaTarefa = {
      title: form.inputTitle.value,
      description: form.inputDes.value,
      date: form.inputDate.value,

      hrs: form.inputHrs.value,
    };

    backendTarefas.unshift(novaTarefa);
    localStorage.setItem("backendTarefas", JSON.stringify(backendTarefas));
  }
}

function geraTarefas() {
  backendTarefas.map((item) => {
    let tarefas = document.createElement("div");
    let titleTarefa = document.createElement("p");
    let desTarefa = document.createElement("p");
    let horsTarefa = document.createElement("p");
    let dateTarefa = document.createElement("p");
    let buttonDelete = document.createElement("button");

    tarefas.classList.add("tarefas");
    buttonDelete.classList.add("buttonDelete");
    buttonDelete.classList.add("iconeTema");
    titleTarefa.classList.add("TitleEdes");
    desTarefa.classList.add("TitleEdes");
    horsTarefa.classList.add("horsDate");
    dateTarefa.classList.add("horsDate");

    titleTarefa.textContent = item.title;
    desTarefa.textContent = item.description;
    dateTarefa.textContent = item.date;
    horsTarefa.textContent = item.hrs;
    buttonDelete.innerHTML = `<i class="fa fa-trash temaIcone" aria-hidden="true"></i>`;
    tarefas.appendChild(titleTarefa);
    tarefas.appendChild(desTarefa);
    tarefas.appendChild(dateTarefa);
    tarefas.appendChild(horsTarefa);
    tarefas.appendChild(buttonDelete);
    listAgendados.appendChild(tarefas);
    form.reset();
    form.inputTitle.focus();

    buttonDelete.addEventListener("click", deleteItem);

    function deleteItem() {
      let index = backendTarefas.indexOf(item);

      if (index > -1) {
        backendTarefas.splice(index, 1);
      }

      let backendRecerva = backendTarefas;

      localStorage.removeItem("backendTaref");
      localStorage.setItem("backendTarefas", JSON.stringify(backendRecerva));
      document.location.reload();
    }
  });
}
geraTarefas();

function configuracao() {
  let divConf = document.createElement("div");
  let atualizar = document.createElement("span");
  let deleta = document.createElement("span");

  buttonConfiguracao.addEventListener("click", mostraConf);

  function mostraConf() {
    atualizar.textContent = "Atualizar Agenda";
    deleta.textContent = "Deletar Agenda";
    divConf.classList.add("divConf");

    divConf.appendChild(atualizar);
    divConf.appendChild(deleta);
    buttonConfiguracao.appendChild(divConf);

    setTimeout(() => {
      divConf.style.opacity = "1";
      divConf.style.transform = "translateY(-105px)  translateX(-100px)";
    }, 100);

    buttonConfiguracao.removeEventListener("click", mostraConf);
    buttonConfiguracao.addEventListener("click", fechaConf);
  }

  function fechaConf() {
    divConf.removeChild(atualizar);
    divConf.removeChild(deleta);
    divConf.style.transform = "translateY(-90px)  translateX(-100px)";
    divConf.style.opacity = "0";
    buttonConfiguracao.removeChild(divConf);
    buttonConfiguracao.addEventListener("click", mostraConf);
    buttonConfiguracao.removeEventListener("click", fechaConf);
  }

  atualizar.addEventListener("click", () => {
    document.location.reload(true);
  });

  deleta.addEventListener("click", deletaAgenda);
}
configuracao();

function deletaAgenda() {
  let divMensagem = document.createElement("div");
  let modal = document.createElement("dialog");
  let mensagem = document.createElement("p");
  let buttonMensagemDelete = document.createElement("button");
  let buttonMensagemCancelar = document.createElement("button");
  let sectionButton = document.createElement("section");
  modal.show();

  mensagem.textContent =
    "Todos os seus agendamentos seram apagados, Tem certeza?";
  buttonMensagemDelete.textContent = "Deletar";
  buttonMensagemCancelar.innerHTML = "Cancelar";

  divMensagem.classList.add("divMensagem");
  buttonMensagemCancelar.classList.add("buttonMensagemCancelar");
  buttonMensagemDelete.classList.add("buttonMensagemDelete");

  sectionButton.appendChild(buttonMensagemDelete);
  sectionButton.appendChild(buttonMensagemCancelar);
  modal.appendChild(mensagem);
  modal.appendChild(sectionButton);
  divMensagem.appendChild(modal);
  window.document.body.appendChild(divMensagem);
  setTimeout(() => {
    modal.style.transform = "scale(1)";
  }, 200);

  buttonMensagemCancelar.addEventListener("click", Cancelar);

  function Cancelar() {
    window.document.body.removeChild(divMensagem);
  }

  buttonMensagemDelete.addEventListener("click", () => {
    buttonMensagemCancelar.removeEventListener("click", Cancelar);
    buttonMensagemDelete.innerHTML = `<i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>`;
    setTimeout(() => {
      localStorage.removeItem("backendTarefas");
      document.location.reload();
    }, 5000);
  });
}

function TrocaAba() {
    let backendTemaDestaques = JSON.parse(localStorage.getItem("backendTema")) || [{temaDestaques: "#F8F8FF"}];

  backendTemaDestaques.map((item) => {
    abaAgendados.style.background = item.temaDestaques;
    abaAgendados.addEventListener("click", () => {
      meusAgendamentos.scrollBy(-300, 0);
      abaAgendados.style.background = item.temaDestaques;
      abaSobre.style.background = "";
    });

    abaSobre.addEventListener("click", () => {
      meusAgendamentos.scrollBy(300, 0);
      abaSobre.style.background = item.temaDestaques;
      abaAgendados.style.background = "";
    });
  });
}

TrocaAba();
