

let menuButton=document.querySelector(".menuButton")
let menuLateral=document.querySelector(".menuLateral")
let menuLateralButton=document.querySelector(".menuLateral button")
let buttonFechaMenuLateral=document.querySelector(".buttonFechaMenuLateral")
let buttonHora=document.querySelector(".buttonHora")
let buttonData=document.querySelector(".buttonData")
let hora=document.querySelector(".hora p")
let data=document.querySelector(".data p")

let backendHora=JSON.parse(localStorage.getItem("backendHora"))
let backendData=JSON.parse(localStorage.getItem("backendData"))


function mostraMenu(){
    menuButton.addEventListener("click",()=>{

        areaUser.style.transform="translateX(100%)"
        
        menuLateral.style.display="inline-block"
        setTimeout(() => {
            menuLateral.style.transform="translateX(0%)"
        },200);
    
    })

    buttonFechaMenuLateral.addEventListener("click",()=>{
        menuLateral.style.transform="translateX(-100%)"
        setTimeout(() => {
            menuLateral.style.display="none"
        },1000);
    })

    main.addEventListener("click",()=>{
        menuLateral.style.transform="translateX(-100%)"
        setTimeout(() => {
            menuLateral.style.display="none"
        },1000);
    })

    

}

mostraMenu()



function queroMimCadastrar(){
    menuLateralButton.addEventListener("click", ()=>{
       

        menuLateral.style.transform="translateX(-100%)"
        areaUser.style.display="inline"
        

        setTimeout(() => {
            inputNome.focus()

            areaUser.style.transform = "translateX(0%)";
            menuLateral.style.display="none"
        },200);
   
    })
}

queroMimCadastrar()



function mainHora(){   
let ligarHora=document.querySelector(".ligarHora")
let horaMenu=document.querySelector(".hora")



if(backendHora != null){
    horaMenu.style.display=backendHora
    ligarHora.style.opacity="1"
    ligarHora.style.marginLeft="25px"
}

buttonHora.addEventListener("click", horaOn)
 

 function horaOn(){
    ligarHora.style.opacity="1"
    ligarHora.style.marginLeft="25px"
    localStorage.setItem("backendHora", JSON.stringify("inline-block"))
    horaMenu.style.display="inline-block"

    buttonHora.removeEventListener("click", horaOn)
    buttonHora.addEventListener("click", horaOff)
  
    
  
}

function horaOff(){
    ligarHora.style.opacity="0.5"
    ligarHora.style.marginLeft="0px"
    localStorage.removeItem("backendHora")
    horaMenu.style.display="none"
    buttonHora.addEventListener("click", horaOn)
    buttonHora.removeEventListener("click", horaOff)
    
   
}

function horaSistema(){
    let horaCompleta= new Date()
    let  h = horaCompleta.getHours()
    let m = horaCompleta.getMinutes()
    let s = horaCompleta.getSeconds()
  
  
    if(h < 10){
      h="0" + h
    }
  
    if(m < 10){
      m="0" + m
    }
  
    if(s<10){
      s="0" +  s 
    }

    hora.innerHTML=`${h}:${m}:${s}`

   
}

setInterval(horaSistema,1000)



 
}

mainHora()


function mainData(){
  let ligarData=document.querySelector(".ligarData")
  let dataMenu=document.querySelector(".data")

  if(backendData !=null){
    dataMenu.style.display=backendData
    ligarData.style.opacity="1"
    ligarData.style.marginLeft="25px"
  }

  buttonData.addEventListener("click", dataOn)

    function dataOn(){
        ligarData.style.opacity="1"
        ligarData.style.marginLeft="25px"
        localStorage.setItem("backendData", JSON.stringify("inline-block"))
        dataMenu.style.display="inline-block"
    
        buttonData.removeEventListener("click", dataOn)
        buttonData.addEventListener("click", dataOff)
    }

    function dataOff(){
        ligarData.style.opacity="0.5"
        ligarData.style.marginLeft="0px"
        localStorage.removeItem("backendData")
        dataMenu.style.display="none"
        buttonData.addEventListener("click", dataOn)
        buttonData.removeEventListener("click", dataOff)
    }

  function dataSistema(){
    let dataCompleta= new Date()

    let d=dataCompleta.getDate()
    let m=dataCompleta.getMonth()+1
    let a=dataCompleta.getFullYear()
    
    console.log(d,m,a)

    if(d<10){
        d="0" + d
    }

    if(m<10){
        m="0" + m
    }

    data.innerHTML=`${d}/${m}/${a}`
  }

  dataSistema()
}

mainData()


function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Tasks',
			text: 'Agenda de tarefas.',
			url: 'https://ag-tarefa.netlify.app/',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}