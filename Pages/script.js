const letras = document.querySelectorAll(".letraSVG")
const quadradinhos = {
  a1: document.querySelectorAll(".a1"),
  a2: document.querySelectorAll(".a2"),
  a3: document.querySelectorAll(".a3"),
  a4: document.querySelectorAll(".a4"),
  a5: document.querySelectorAll(".a5"),
  a6: document.querySelectorAll(".a6"),
  a7: document.querySelectorAll(".a7"),
  a8: document.querySelectorAll(".a8"),
  a9: document.querySelectorAll(".a9"),
  a10: document.querySelectorAll(".a10")
}



window.addEventListener("scroll", () => {
  if(window.innerWidth > 700) {
    window.scrollY > 550? alteracoesNoScroll(): removerAlteracoesScroll()
  } else {
    window.scrollY > 150? alteracoesNoScroll(): removerAlteracoesScroll()
  }
  // 3000
  window.scrollY > 3000? abaixar([...quadradinhos["a1"], ...quadradinhos["a4"]]) : ''

  // 3500
  window.scrollY > 3500? abaixar([...quadradinhos["a10"], ...quadradinhos["a8"]]) : ''

  // 4000
  window.scrollY > 4000? abaixar([...quadradinhos["a2"], ...quadradinhos["a7"]]) : ''

  // 4500
  window.scrollY > 4500? abaixar([...quadradinhos["a3"], ...quadradinhos["a5"]]) : ''

  // 4700
  window.scrollY > 4700? abaixar([...quadradinhos["a6"], ...quadradinhos["a9"]]) : ''
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


function abaixar(listaQuadradinhos) {
  listaQuadradinhos.forEach(quadrinho => {
    quadrinho.style.transform = "translateY(0) scale(1)"
    quadrinho.style.opacity = "1"
  });
}



/* a1a4-3000      a10a8-3500      a2a7-4000     a3a5-4500   a6a9-4700  */