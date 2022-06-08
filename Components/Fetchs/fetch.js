const fetchHeader = new Promise((resolve) => {
  
  // Fetch do Header
  fetch("../Components/NavBar/navBar.html")
  .then( response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#header").innerHTML = data
    menuScroll()
  })




  // Fetch do campo azul
  fetch("../Components/CampoAzul/campoAzul.html")
  .then( response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#campoAzul").innerHTML = data
  })




  // Fetch do CUBO
  fetch("../Components/Cubo3D/cubo3D.html")
  .then( response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#campoDo3D").innerHTML = data
    resolve()
  })
})




// Mudar cor dos botoes na NAV
function menuScroll() {
  const botoes = document.querySelectorAll(".btnNav")
  window.addEventListener("scroll", () => {
    window.scrollY > 550? botoes.forEach(botao => botao.style.color = "var(--blue)") : botoes.forEach(botao => botao.style.color = "#fff")
  })
}