const fetchHeader = new Promise((resolve) => {
  
  // Fetch do Header
  fetch("../Components/NavBar/navBar.html")
  .then( response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#header").innerHTML = data
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

  fetch("../Components/Card/card.html")
  .then( response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#containnerCards").innerHTML = data
    resolve()
  })
})