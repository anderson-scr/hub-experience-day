function openModal() {
  let modal = document.querySelector("#div-modal");
        
  if (typeof modal == 'undefined' || modal == null) return

  modal.style.display = 'block';

  const setinhaBaixo = document.querySelector("#setinhaBaixo")
  const setinhaCima = document.querySelector("#setinhaCima")
  setinhaCima.style.visibility = "hidden"
  setinhaBaixo.style.visibility = "visible"
  
  mostraEscondeSetinha(setinhaBaixo, setinhaCima)
  const btnEnviar = document.querySelector("#enviar")
  btnEnviar.addEventListener("click", verificaEntrada)
}







function closeModal() {
  let modal = document.querySelector("#div-modal");
        
  if (typeof modal == 'undefined' || modal == null) return

  modal.style.display = 'none';
}




// const scrollModal = document.querySelector("#containnerImg")
function mostraEscondeSetinha(setinhaBaixo, setinhaCima) {
  const scrollCampo = document.querySelector("#containnerImg")


  scrollCampo.addEventListener("scroll", () => {
    if (scrollCampo.offsetHeight + scrollCampo.scrollTop >= scrollCampo.scrollHeight) {  
      setinhaBaixo.style.visibility = "hidden"
    } else {
      setinhaBaixo.style.visibility = "visible"
    }

    if (scrollCampo.scrollTop == 0) {  
      setinhaCima.style.visibility = "hidden"
    } else {
      setinhaCima.style.visibility = "visible"
    }
  })
}


function verificaEntrada() {
  const respostas = {
    iptNome: document.querySelector("#iptNome"),
    iptCpf: document.querySelector("#iptCpf"),
    iptNasc: document.querySelector("#iptNasc"),
    iptEmail: document.querySelector("#iptEmail"),
    selectSexo: document.querySelector("#selectSexo"),
    iptTelefone: document.querySelector("#iptTelefone"),
    check1: document.querySelector("#check1").checked,
    check2: document.querySelector("#check2").checked
  }
  console.log(respostas["selectSexo"])
}