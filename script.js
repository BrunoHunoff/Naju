const botao = document.getElementById('clique');

botao.onclick= "changeImg()";

function changeImg(){
    var imagem = document.getElementById('imagem');

    imagem.src = "lactea.jpg";

    var titulo = document.getElementById('titulo');

    titulo.innerText = "TMJ VSF🤙";
}