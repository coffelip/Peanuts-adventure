const avanca = document.querySelectorAll('.bnt-proximo');

avanca.forEach(button ==> {
button.addEventListener('click', function()){
const atual = document.querySelector('.ativo');
const proximoPasso = 'passo-' + this.getAttribute('data-proc=ximo');

atual.classList.remove('ativo');
document.getElementById(proximoPasso).classList.add('ativo');
}
}
     
    )