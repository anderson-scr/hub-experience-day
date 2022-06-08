document.addEventListener("DOMContentLoaded", () => {
  console.log("Quando o site carrega")
  fetch("http://localhost:5005/getAll")

    .then(response => response.json())
    .then(data => createCard(data))
})

function createCard(infoCard) {
  // console.log(infoCard)
  for (let card of infoCard["data"]) {
    new Card(card)  
  }
}


function openModal(evt) {
  const idPalestra = evt.target.className
  console.log(idPalestra)
}


class Card {
  constructor(infoCard) {
    this.infoCard = infoCard
    this.card = `<div class="flip-card-container" style="--hue: 220">
                  <div class="flip-card">
                    <div class="card-front">
                      
                      <figure id="figure2">
                        <h2>${infoCard["nome_palestrante"]}</h2>
                        <h3>${infoCard["sub_info_palestrante"]}</h3>
                      </figure>

                      <figure id="titulo_palestra">
                        <h1>${infoCard["titulo_palestra"]}</h1>
                        <div id="containnerDataHora">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar4-week" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                            <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                          </svg>
                          <legend id="legendaDataHora">${this.trataData(infoCard["data_palestra"])}</legend>
                        </div>
                      </figure>
                      <img src="../.${infoCard["img_palestrante"]}" alt="Foto do palestrante" id="foto">
                    </div>

                    <div class="card-back">
                      <figure>
                        <div class="img-bg"></div>
                        <h2>${infoCard["nome_palestrante"]}</h2>
                        
                        <p id="descricaoPalestra">${infoCard["descricao_palestra"]}</p>
                        <legend id="tresPontos">...</legend>
                        
                        <p id="sala">Inscritos</p>

                        <div id="containnerSocialCard">
                          <img src="../../Assets/Svgs/people.svg" alt="Icone vagas">
                          <p id="vagas">08/${infoCard["limite_pessoa"]}</p>
                        </div>
                      </figure>

                      <button id="inscricao" type="button" class="${infoCard["id_palestra"]}" onclick='openModal(event)'>Inscreva-se</button>

                      <div class="design-container">
                        <span class="design design--1"></span>
                        <span class="design design--2"></span>
                        <span class="design design--3"></span>
                        <span class="design design--4"></span>
                        <span class="design design--5"></span>
                        <span class="design design--6"></span>
                        <span class="design design--7"></span>
                        <span class="design design--8"></span>
                      </div>
                      
                    </div>

                  </div>
                </div>`

    this.constroiCard()
  }

  constroiCard() {
    const containnerCardi = document.querySelector(".containnerDeCards") 
    containnerCardi.innerHTML += this.card
  }

  trataData(data) {
    const novaData = data.substr(5, 5)
    return novaData
  }
}