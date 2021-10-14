var conteudoA = "<img src='imagens/iron-giant1.jpg' /> <h2></h2> <p></p> <button onclick='carregarConteudo(conteudoB1)'>Ir para a Direita</button> <button onclick='carregarConteudo(conteudoB2)'>Ir para a Esquerda</button>";

var conteudoB1 = "<img src='imagens/iron-giant2.jpg' /> <h2></h2>  <p></p> <button onclick='carregarConteudo(conteudoC1)'>Ir para a Direita</button> <button onclick='carregarConteudo(conteudoC2)'>Ir para a Esquerda</button>";

var conteudoB2 = "<img src='imagens/iron-giant3.jpg' />  <h2>Conteudo B3</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et quam gravida, sodales nunc non, egestas urna. Nulla quis feugiat libero, eget sollicitudin erat. Pellentesque vulputate arcu at sapien tristique, non bibendum diam aliquam. Quisque at facilisis neque. Integer pretium, ex et consectetur laoreet, turpis magna feugiat velit, ac efficitur odio tortor sed sem. Donec vel leo maximus nisl convallis ornare sit amet id quam. Donec porta aliquet elementum.</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et quam gravida, sodales nunc non, egestas urna. Nulla quis feugiat libero, eget sollicitudin erat. Pellentesque vulputate arcu at sapien tristique, non bibendum diam aliquam. Quisque at facilisis neque. Integer pretium, ex et consectetur laoreet, turpis magna feugiat velit, ac efficitur odio tortor sed sem. Donec vel leo maximus nisl convallis ornare sit amet id quam. Donec porta aliquet elementum.</p> <button onclick='carregarConteudo(conteudoC3)'>Ir para a Direita</button> <button onclick='carregarConteudo(conteudoC4)'>Ir para a Esquerda</button>";

var elemento = document.getElementById("conteudo");

function carregarConteudo(conteudo){
    elemento.innerHTML = conteudo;
}

function mudarEstilos()  {
    //Dentro dessa função, escreva o codigo para alterar o estilo do elemento com o id "text". 
    //A cor do texto deve ser verde, o tamanho do texto deve ser 15px e a fonte escolhida deve ser Arial;
    //Escreva sua resposta no espaço abaixo.  
    //Um exemplo de alteração de estilos por javascript: text.style.fontFamily = "Comic Sans MS";
    // font-family: banana;
    
    text.style.fontFamily = "Comic Sans MS";
    text.style.color = "white";
    text.style.padding = "200";
    text.style.backgroundColor = "#333";

}

carregarConteudo(conteudoA)