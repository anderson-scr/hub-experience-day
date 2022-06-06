// Fadezinho ao carregar a pagina. 
document.addEventListener("DOMContentLoaded", fetchHeader.then(() => {
  
  setTimeout(function() {
    //your code here
      const texto1 = document.querySelector(".textImpact")
      const texto2 = document.querySelector(".textDatePlace")
      const cubao = document.querySelector("#campoDo3D")

      texto1.style.opacity = "1"
      texto2.style.opacity = "1"
      cubao.style.opacity = "1" 
    })
  }, 5000)
)