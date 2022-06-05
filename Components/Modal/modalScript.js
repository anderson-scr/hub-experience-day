function openModal() {
  let modal = document.querySelector("#div-modal");
        
  if (typeof modal == 'undefined' || modal == null) return

  modal.style.display = 'block';
}

function closeModal() {
  let modal = document.querySelector("#div-modal");
        
  if (typeof modal == 'undefined' || modal == null) return

  modal.style.display = 'none';
}