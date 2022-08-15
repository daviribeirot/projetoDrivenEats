
function selecionaComida(caixa){
    const comidas = document.querySelectorAll('.comidas');
    
    for (let i = 0; i < comidas.length; i++ ){
        comidas[i].classList.remove('selecionado');
    }

    if ( caixa.classList.contains('selecionado') !== true ){
         caixa.classList.add('selecionado');
    } else {
         caixa.classList.remove('selecionado');
    }
    
    verificaBotao();
}

function selecionaBebida(caixa){
    const refris = document.querySelectorAll('.refris');
   
    for (let i = 0; i < refris.length; i++ ){
        refris[i].classList.remove('selecionado');
    }
    if ( caixa.classList.contains('selecionado') !== true ){
         caixa.classList.add('selecionado');
       
    } else {
         caixa.classList.remove('selecionado');
    }
    
    verificaBotao();
}

function selecionaDoce(caixa){
    const doces = document.querySelectorAll('.doces');
   
    for (let i = 0; i < doces.length; i++ ){
        doces[i].classList.remove('selecionado');
    }
    if ( caixa.classList.contains('selecionado') !== true ){
         caixa.classList.add('selecionado');
       
    } else {
         caixa.classList.remove('selecionado');
    }
    
    verificaBotao();
}

function verificaBotao(){
const botao = document.querySelector('.botao');
const botaoVerde = document.querySelector('.botao-verde');
const pedido = document.querySelectorAll('.selecionado');
if (pedido.length >= 3){
    botao.style.display = "none";
    botaoVerde.style.display = "inline";
}
}