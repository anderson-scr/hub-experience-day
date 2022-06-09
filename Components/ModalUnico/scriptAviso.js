function abrirAviso(mn)
{
    let modal = document.querySelector('.modal_aviso');
        
    if (typeof modal == 'undefined' || modal == null)
        return;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    
}



function closeaviso(mn)
{
    let modal = document.querySelector('.modal_aviso');
    
    if (typeof modal == 'undefined' || modal == null)
        return;
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
}