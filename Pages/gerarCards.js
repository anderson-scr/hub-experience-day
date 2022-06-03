fetch("../Components/Card/card.html")
.then( response => {
  return response.text()
})
.then(data => {
  const terreo = document.querySelector("#terreo")
  const primeiroAndar = document.querySelector("#primeiroAndar")
  const segundoAndar = document.querySelector("#segundoAdar")
  const terceiroAndar = document.querySelector("#terceiroAndar")


  for(let i =0; i < 5; i++) {
    terreo.innerHTML += data
    primeiroAndar.innerHTML += data
    segundoAndar.innerHTML += data
    terceiroAndar.innerHTML += data
  }
})