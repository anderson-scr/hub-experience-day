const letras = document.querySelectorAll(".letraSVG")

window.addEventListener("scroll", () => {
  window.scrollY > 600? alteracoesNoScroll(): removerAlteracoesScroll()
})



function alteracoesNoScroll() {
  
  // Letras do lado do texto
  letras[0].style.left = "35px"
  letras[1].style.left = "40%"
  letras[2].style.left = "83%"

  letras[0].style.opacity = 1
  letras[1].style.opacity = 1
  letras[2].style.opacity = 1
}

function removerAlteracoesScroll() {

  // Letras do lado do texto
  letras[0].style.left = "300px"
  letras[0].style.opacity = 0
  
  letras[1].style.left = "0"
  letras[1].style.opacity = 0
  
  letras[2].style.left = "115%"
  letras[2].style.opacity = 0
}