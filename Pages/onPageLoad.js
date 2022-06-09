document.addEventListener("DOMContentLoaded", () => {
  menuScroll()


  setTimeout(function(){
    const texto1 = document.querySelector(".textImpact")
    const texto2 = document.querySelector(".textDatePlace")
    const cubao = document.querySelector("#campoDo3D")

    texto1.style.opacity = "1"
    texto2.style.opacity = "1"
    cubao.style.opacity = "1" 
 }, 500);
})



function menuScroll() {
  const botoes = document.querySelectorAll(".btnNav")
  window.addEventListener("scroll", () => {
    window.scrollY > 550? botoes.forEach(botao => botao.style.color = "var(--blue)") : botoes.forEach(botao => botao.style.color = "#fff")
  })
}