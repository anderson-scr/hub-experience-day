fetch("../Components/Card/card.html")
.then( response => {
  return response.text()
})
.then(data => {
  const containnerCards = document.querySelector("#containnerCards")

  for(let i =0; i < 10; i++) {
    containnerCards.innerHTML += data
  }
})