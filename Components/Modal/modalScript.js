function openModal(evt) {
  console.log(evt.target.className)
  const idPalestrante = evt.target.className

  fetch("http://localhost:5005/getPalestra/" + idPalestrante)
    .then(response => response.json())
    .then(data => createModal(data))
}

function createModal(cardi) {
  // console.log(cardi["data"]["0"])

  new Modal(cardi["data"]["0"])
}

// andar_sala: "6º andar"
// data_palestra: "2022-06-22T04:00:00.000Z"
// descricao_palestra: "06Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\r\nnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\r\ntenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\r\nquia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \r\nsapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\r\nrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis \r\nminima nesciunt dolorem!"
// hora_palestra: "09:30:00"
// id_palestra: 6
// img_palestrante: "./Assets/Imgs/Palestrantes/pessoa06.jpg"
// instagram_palestrante: "https://www.instagram.com/"
// limite_pessoa: 5
// linkedin_palestrante: "https://www.linkedin.com/"
// nome_palestrante: "Nome do Palestrante 6"
// nome_sala: "nome Sala 6"
// sub_info_palestrante: "Informacao sobre palestra 6"
// titulo_palestra: "Titulo da Palestra 6"


class Modal {
  constructor(infoCard) {
    this.infoCard = infoCard
    this.modalHtml = `<div id="div-modal" class="modal">
    <div id="gradient">
      <div class="modal_content">
        <div class="containnerSetinha" id="containnerSetinhaCima">
          <img src="../../Assets/Svgs/arrow-down.svg" alt="Seta cima" id="setinhaCima" class="seta">
        </div>
        
        <!-- Parte direita do modal -->
        <div id="containnerImg">
          <div id="containnerImgSocial">
            <h2>${this.infoCard["nome_palestrante"]}</h2>
            <p>${this.infoCard["sub_info_palestrante"]}</p>
            <div id="containnerSocial">
              <img src="../../Assets/Svgs/instagram.svg" alt="Icone instragram">
              <img src="../../Assets/Svgs/linkedin.svg" alt="Icone Linkedin">
            </div>
            <img src=".${this.infoCard["img_palestrante"]}" class="imgModal" alt="Foto palestrante">
          </div>
  
          <div class="containnerInformacoes">
            <h3>${this.infoCard["titulo_palestra"]}</h3>
            <div class="containnerSalaAndar">
              <p>${this.infoCard["nome_sala"]}</p>
              <p>- ${this.infoCard["andar_sala"]}</p>
            </div>
            <div id="paragrafo">
              ${this.infoCard["descricao_palestra"]}
            </div>
            <div class="espacoExtra"></div>
          </div>
  
        </div>
        <!-- Parte direita do modal -->
  
  
  
        <!-- Parte do form do modal -->
        <form>
  
          <p>Formulario de Inscrição</p>
          <!-- campo nome -->
          <div class="espaco">
            <div class="wrapper">
              <div class="input-data">
                <input type="text" name="nome" id="iptNome" required>
                <label>Nome</label>
              </div>
            </div>
          </div>
  
  
  
          <!-- campo cpf -->
          <script type="text/javascript">
            $("#iptCpf").mask("000.000.000-00");
          </script>
          <div class="espaco">
            <div class="wrapper">
              <div class="input-data">
                <input type="text" name="cpf" id="iptCpf" required>
                <label>CPF</label>
              </div>
            </div>
          </div>
  
  
  
          <!-- campo data de nascimento -->
          <div class="espaco">
            <div class="wrapper">
              <div class="input-data">
                <input type="text" name="data_nasc" id="iptNasc" required>
                <label>Data de Nascimento</label>
              </div>
            </div>
          </div>
  
  
  
          <!-- campo e-mail -->
          <div class="espaco">
            <div class="wrapper">
              <div class="input-data">
                <input type="email" id="iptEmail" required>
                <label>E-mail</label>
              </div>
            </div>
          </div>
  
  
  
          <!-- select sexo -->
          <div class="espaco">
            <div>
              <select name="select" class="sexo" id="selectSexo" required="">
                <option selected disabled>Sexo</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>
  
  
  
          <!-- campo telefone -->
          <div class="espaco">
            <div class="wrapper">
              <div class="input-data">
                <input type="text" name="telefone" id="iptTelefone" required>
                <label>Telefone</label>
              </div>
            </div>
          </div>
  
  
  
          <!-- check box -->
          <div class="espaco_menor">
            <div class="check_box">
              <label class="containerChecks">
                <div class="containnerCheckzinho">
                  <input type="checkbox" id="check1" required>
                  <span class="checkbox"></span>
                </div>
                <div class="termo">
                  <h6>Ao enviar este formulário, você permite que seus dados pessoais sejam processados em nossas plataformas educacionais.</h6>
                </div>
              </label>
            </div>
            </div>
              <div class="espaco_menor">
                <div class="check_box">
                  <label id="containerChecks">
                    <div class="containnerCheckzinho">
                      <input type="checkbox" id="check2" required>
                      <span class="checkbox"></span>
                    </div>
                    <div class="termo">
                      <h6>Você concorda em receber informações a respeito de cursos relacionados ao Senac.</h6>
                    </div>
                  </label>
                </div>
              </div>
            <div>
              <div class="espaco" id="containnerBotoesModal">
                <div id="botoes">
                  <div id="cancelar_div">
                    <button class="btn_cancelar" id="cancelar">Cancelar</button>
                  </div>
                  <div id="enviar_div">
                    <button class="btn_enviar" id="enviar">Enviar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <!-- Parte do form do modal -->
  
        <div class="containnerSetinha" id="containnerSetinhaBaixo">
          <img src="../../Assets/Svgs/arrow-down.svg" alt="Seta baixo" id="setinhaBaixo" class="seta">
        </div>
  
      </div>
    </div>
  </div>`

  this.abrir()
  }




  abrir() {
    let modal = document.querySelector("#containnerModal");
    
    if (typeof modal == 'undefined' || modal == null) return
  
    modal.innerHTML = this.modalHtml;
    document.querySelector("body").style.overflow = "hidden"
    
    
    this.mostraEscondeSetinha()
    const btnEnviar = document.querySelector("#enviar")
    const btnCancelar = document.querySelector("#cancelar")
    btnEnviar.addEventListener("click", evt => this.verificaEntrada(evt))
    btnCancelar.addEventListener("click", evt => this.closeModal(evt))
  }




  closeModal(evt) {
    evt.preventDefault()

    let modal = document.querySelector("#containnerModal");
    if (typeof modal == 'undefined' || modal == null) return
  
    modal.innerHTML = '';
    document.querySelector("body").style.overflow = "visible"
  }




  verificaEntrada(evt) {
    evt.preventDefault()
    const respostas = {
      iptNome: document.querySelector("#iptNome").value,
      iptCpf: document.querySelector("#iptCpf").value,
      iptNasc: document.querySelector("#iptNasc").value,
      iptEmail: document.querySelector("#iptEmail").value,
      selectSexo: document.querySelector("#selectSexo").value,
      iptTelefone: document.querySelector("#iptTelefone").value,
      id_palestra: this.infoCard["id_palestra"]
    }
    
    const checks = {
      check1: document.querySelector("#check1").checked,
      check2: document.querySelector("#check2").checked
    }
    console.log(respostas)
    fetch("http://localhost:5005/insert", {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(respostas)
    })
    // .then(response => response.json())
    // .then(data => console.log(data))

  }



  mostraEscondeSetinha() {
    const setinhaBaixo = document.querySelector("#setinhaBaixo")
    const setinhaCima = document.querySelector("#setinhaCima")

    setinhaCima.style.visibility = "hidden"
    setinhaBaixo.style.visibility = "visible"

    const scrollCampo = document.querySelector("#containnerImg")
  
    scrollCampo.addEventListener("scroll", () => {
      if (scrollCampo.offsetHeight + scrollCampo.scrollTop >= scrollCampo.scrollHeight) {  
        setinhaBaixo.style.visibility = "hidden"
      } else {
        setinhaBaixo.style.visibility = "visible"
      }
  
      if (scrollCampo.scrollTop == 0) {  
        setinhaCima.style.visibility = "hidden"
      } else {
        setinhaCima.style.visibility = "visible"
      }
    })
  }

}
