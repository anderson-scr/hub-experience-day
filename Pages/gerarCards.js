fetch("../Components/Card/card.html")
.then( response => {
  return response.text()
})
.then(data => {
  const terreo = document.querySelector(".containnerDeCards")

  for(let i =0; i < 10; i++) {
    terreo.innerHTML += data
  }
})