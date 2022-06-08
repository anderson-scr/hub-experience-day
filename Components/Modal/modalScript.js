function openModal(evt) {
  const idPalestrante = evt.target.className
  console.log(typeof idPalestrante)

  fetch("http://localhost:5005/getPalestra/" + idPalestrante)

  .then(response => response.json())
  .then(data => console.log(data))
}


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
            <h2>Elon Musk</h2>
            <p>CEO da Tesla e SpaceX</p>
            <div id="containnerSocial">
              <img src="../../Assets/Svgs/instagram.svg" alt="Icone instragram">
              <img src="../../Assets/Svgs/linkedin.svg" alt="Icone Linkedin">
            </div>
            <img src="../../Assets/Imgs/tia2.jpeg" class="imgModal" alt="Tia 2 jepege">
          </div>
  
          <div class="containnerInformacoes">
            <h3>Titulo da palestra</h3>
            <div class="containnerSalaAndar">
              <p>Sala 304</p>
              <p>-  3º Andar </p>
            </div>
            <div id="paragrafo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
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
                <input type="text" id="iptEmail" required>
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
                    <button class="btn_cancelar" id="cancelar" onclick="closeModal()">Cancelar</button>
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

  openModal()
  mostraEscondeSetinha()
  }



  openModal() {
    let modal = document.querySelector("#containnerModal");
    
    if (typeof modal == 'undefined' || modal == null) return
  
    modal.style.display = 'block';
  
    const setinhaBaixo = document.querySelector("#setinhaBaixo")
    const setinhaCima = document.querySelector("#setinhaCima")
    setinhaCima.style.visibility = "hidden"
    setinhaBaixo.style.visibility = "visible"
  
    document.querySelector("body").style.overflow = "hidden"
    
    
    mostraEscondeSetinha(setinhaBaixo, setinhaCima)
    const btnEnviar = document.querySelector("#enviar")
    btnEnviar.addEventListener("click", verificaEntrada)
  }


  closeModal() {
    let modal = document.querySelector("#containnerModal");
    if (typeof modal == 'undefined' || modal == null) return
  
    modal.innerHTML = '';
    document.querySelector("body").style.overflow = "visible"
  }


  verificaEntrada() {
    const respostas = {
      iptNome: document.querySelector("#iptNome"),
      iptCpf: document.querySelector("#iptCpf"),
      iptNasc: document.querySelector("#iptNasc"),
      iptEmail: document.querySelector("#iptEmail"),
      selectSexo: document.querySelector("#selectSexo"),
      iptTelefone: document.querySelector("#iptTelefone"),
      check1: document.querySelector("#check1").checked,
      check2: document.querySelector("#check2").checked
    }
    console.log(respostas["selectSexo"])
  }



  mostraEscondeSetinha(setinhaBaixo, setinhaCima) {
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
