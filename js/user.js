
let main = document.querySelector("main");
let areaUser = document.querySelector(".areaUser");
let inputNome = document.querySelector("#inputNome");
let inputEmail = document.querySelector("#inputEmail");
let inputSenha = document.querySelector("#inputSenha");
let inputConfSenha = document.querySelector("#inputConfSenha");
let labelNome = document.querySelector("#labelNome");
let labelEmail = document.querySelector("#labelEmail");
let labelSenha = document.querySelector("#labelSenha");
let labelConfSenha = document.querySelector("#labelConfSenha");
let sectionformUser = document.querySelector(".sectionFormUser");
let formUser = document.querySelector(".formUser");
let excluirUser=document.querySelector(".excluirUser")
let mensagemMenuLateral=document.querySelector(".mensagemMenuLateral")
let buttonExcluirConta=document.querySelector(".excluirConta")
let valid = false;

let backendUser = JSON.parse(localStorage.getItem("backendUser")) || []
formUser.addEventListener("submit", cadastrarUser);


function MostraUserPerfil() {
  let buttonPerfil = document.querySelector(".user");
  let fechaPerfil = document.querySelector(".fechaPerfil");
 

  buttonPerfil.addEventListener("click", () => {
    areaUser.style.display = "inline";
    menuLateral.style.transform="translateX(-100%)"
    setTimeout(() => {
      areaUser.style.transform = "translateX(0%)";
    }, 100);
  });

  fechaPerfil.addEventListener("click", ()=>{
  
    areaUser.style.transform = "translateX(100%)";
    setTimeout(() => {
      areaUser.style.display = "";
      document.location.reload();
    }, 700);
  })
  
  
    
  

  main.addEventListener("click", () => {
    areaUser.style.transform = "translateX(100%)";
    setTimeout(() => {
      areaUser.style.display = "";
    }, 700);
  });
}
MostraUserPerfil();



function validarUser() {

  inputNome.onkeyup = function () {
    if (inputNome.value.length < 4) {
      labelNome.style.color = "red";
      labelNome.textContent = "*minimo 4 caractere";
      valid = false;
    } else {
      labelNome.style.color = "gray";
      labelNome.textContent = "Nome";
      valid = true;
    }
  };

  inputEmail.onkeyup = function () {
    if (
      inputEmail.value.length < 8 ||
      !inputEmail.value.includes("@") ||
      !inputEmail.value.includes(".com")
    ) {
      labelEmail.style.color = "red";
      labelEmail.textContent = "*email invalido";
      valid = false;
    } else {
      labelEmail.style.color = "gray";
      labelEmail.textContent = "E-mail";
      valid = true;
    }
  };

  inputSenha.onkeyup = function () {
    if (inputSenha.value.length < 8) {
      labelSenha.style.color = "red";
      labelSenha.textContent = "*minimo 8 caractere";
      valid = false;
    } else {
      labelSenha.style.color = "gray";
      labelSenha.textContent = "Senha";
      valid = true;
    }
  };

  inputConfSenha.onkeyup = function () {
    if (inputConfSenha.value != inputSenha.value) {
      labelConfSenha.style.color = "red";
      labelConfSenha.textContent = "*senha invalida";
      valid = false;
    } else {
      labelConfSenha.style.color = "gray";
      labelConfSenha.textContent = "Confimar";
      valid = true;
    }
  };
}
validarUser();


function privarSenha(){
  
 let verSenha=document.querySelector("#verSenha")
 let verConfSenha=document.querySelector("#verConfSenha")

 verSenha.addEventListener("click", mostraSenha)
 function mostraSenha(){
     inputSenha.setAttribute("type", "text")
     verSenha.classList.remove("fa-eye-slash")
     verSenha.classList.add("fa-eye")
     verSenha.style.color="black"

     verSenha.removeEventListener("click",mostraSenha)
     verSenha.addEventListener("click", esconderSenha)
 }



 function esconderSenha(){
  inputSenha.setAttribute("type", "password")
  verSenha.classList.remove("fa-eye")
  verSenha.classList.add("fa-eye-slash")
  verSenha.style.color=""

  verSenha.addEventListener("click",mostraSenha)
  verSenha.removeEventListener("click", esconderSenha)
 }



 verConfSenha.addEventListener("click", mostraConfSenha)
 function mostraConfSenha(){
     inputConfSenha.setAttribute("type", "text")
     verConfSenha.classList.remove("fa-eye-slash")
     verConfSenha.classList.add("fa-eye")
     verConfSenha.style.color="black"

     verConfSenha.removeEventListener("click",mostraConfSenha)
     verConfSenha.addEventListener("click", esconderConfSenha)
 }



 function esconderConfSenha(){
  inputConfSenha.setAttribute("type", "password")
  verConfSenha.classList.remove("fa-eye")
  verConfSenha.classList.add("fa-eye-slash")
  verConfSenha.style.color=""

  verConfSenha.addEventListener("click",mostraConfSenha)
  verConfSenha.removeEventListener("click", esconderConfSenha)
 }
}
privarSenha()


function cadastrarUser(event) {
  event.preventDefault();

  let divLoading=document.createElement("div")
  let loading=document.createElement("div")
  let BoasVidasUser=document.createElement("div")

  divLoading.classList.add("divLoading")
  loading.classList.add("loading")
  BoasVidasUser.classList.add("boasVidasUser")

 
  

  if (valid) {
    const novoUser = {
      nomeUser: inputNome.value,
      emailUser: inputEmail.value,
      senhaUser: inputSenha.value,
    };
    backendUser.push(novoUser);
    localStorage.setItem("backendUser", JSON.stringify(backendUser)) || [];

    divLoading.appendChild(loading)
    areaUser.appendChild(divLoading)
    areaUser.style.overflowY=`hidden`
    setTimeout(() => {
      BoasVidasUser.innerHTML=`<div></div><p>Bem vindo <span>${inputNome.value}</span></p>`
      divLoading.removeChild(loading)
      divLoading.appendChild(BoasVidasUser)
    },5000 );

    setTimeout(() => {
      formUser.submit();
    },12000);
    
  } else {
    alert("Preencha os campos corretamente");
  }
}


function verificarUser() {
  let verificar = localStorage.getItem("backendUser");
  if (verificar != null) {
    perfilUser();
    let sectionUser = document.querySelector(".sectionUser");
    let nomePerfil = document.querySelector(".nomePerfil");
    let nomeMenuUser = document.querySelector(".nomeMenuUser");
    let emailPerfil = document.querySelector(".emailPerfil");

    sectionformUser.style.display = "none";
    sectionUser.style.display = "inline-block";
    mensagemMenuLateral.style.display="none"
    backendUser.map((user) => {
      nomePerfil.textContent = user.nomeUser;
      nomeMenuUser.textContent = user.nomeUser;
      emailPerfil.innerHTML = `<i class="fa fa-envelope-o" aria-hidden="true"></i> ${user.emailUser}`;
    });
  } else {
    sectionformUser.style.display = "";
    excluirUser.style.display="none"
  }
}
verificarUser();


function perfilUser() {
  let ButtonImgUser = document.querySelector(".ButtonImgUser");
  let imgUser = document.querySelector(".imgUser");
  let user = document.querySelector(".user");

  imgUser.src = JSON.parse(localStorage.getItem("perfil")) || imgUser.src;

  user.style.backgroundImage = `url(${imgUser.src})`;

  imgUser.addEventListener("click", () => {
    ButtonImgUser.click();
  });

  ButtonImgUser.addEventListener("change", () => {
    let reader = new FileReader();

    reader.onload = () => {
      imgUser.src = reader.result;
      let perfil = imgUser.src;

      localStorage.setItem("perfil", JSON.stringify(perfil));
    };

    reader.readAsDataURL(ButtonImgUser.files[0]);
  });
}

function progressUser() {
  let totalDel = document.querySelector(".totalDe");
  let totalAg = document.querySelector(".totalAg");
  let progressTotal = document.querySelector(".progressTotal");
  let circleProgressT = document.querySelector(".circleProgressT");

  // ..................função de monitoração da barra de progreço Deletados......................//
  function progressDelete() {
    let buttonDelete = document.querySelectorAll(".buttonDelete");
    let progressDe = document.querySelector(".progressDe");
    let pegaDel = JSON.parse(localStorage.getItem("deletados")) || 0;

    totalDel.textContent = pegaDel;
    progressDe.style.width = `${pegaDel}px`;

    let del = 0;
    if (buttonDelete) {
      for (const iterator of buttonDelete) {
        iterator.addEventListener("click", () => {
          del++;
          let delArm = parseInt(totalDel.textContent) + del;

          localStorage.setItem("deletados", JSON.stringify(delArm));
        });
      }
    }
  }

  progressDelete();
  //..................................................................................................//

  // ..................função de monitoração da barra de progreço Agendados...........................//
  function progressAgendados() {
    let progressAg = document.querySelector(".progressAg");
    let pegaAge = JSON.parse(localStorage.getItem("agendados")) || 0;

    totalAg.textContent = pegaAge;
    progressAg.style.width = `${pegaAge}px`;

    let aGe = 0;
    buttonAgendar.addEventListener("click", () => {
      aGe++;
      aGeArm = parseInt(totalAg.textContent) + aGe;
      localStorage.setItem("agendados", JSON.stringify(aGeArm));
    });
  }

  progressAgendados();

  progressTotal.textContent =
    parseInt(totalAg.textContent) + parseInt(totalDel.textContent);
  let calc = (parseInt(progressTotal.textContent) * 440) / 100 - 80;

  circleProgressT.style.strokeDashoffset = `calc(400)`;
  setTimeout(() => {
    circleProgressT.style.strokeDashoffset = `calc(${calc} - 440)`;
  }, 2000);
}

progressUser();




function excluirConta(){
    
buttonExcluirConta.onclick=()=>{
  localStorage.clear()
  document.location.reload();
}

}

excluirConta()