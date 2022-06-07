document.addEventListener("DOMContentLoaded", () => {
  console.log("Quando o site carrega")
  fetch("http://localhost:5005/getAll")

    .then(response => response.json())
    .then(data => console.log(data))
})