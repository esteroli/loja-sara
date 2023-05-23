//Capturando os elementos do DOM
var pesquisaIcon = document.querySelector(".pesquisa-icon");
var loginIcon = document.querySelector(".login-icon")
var cartIcon = document.querySelector(".cart-icon")
var pesquisaInput = document.getElementById("pesquisa-input");
var pesquisaBotao = document.getElementById("pesquisa-botao");

//Evento de clique no ícone de busca
pesquisaIcon.addEventListener("click", function(evento) {
    //Ocultar outros ícones
    loginIcon.style.display = "none";
    cartIcon.style.display = "none";

    //Exibir barra de pesquisa
    pesquisaInput.style.display = "block";
    pesquisaBotao.style.display = "inline-block"

    evento.stopPropagation(); //Evita que o clique se propague para o documento
});

//Evento de clique fora da área de pesquisa para esconder a digitação
document.addEventListener("click", function() {
    //exibir outros ícones
    loginIcon.style.display = "inline-block";
    cartIcon.style.display = "inline-block";

    //ocultar barra de pesquisa
    pesquisaInput.style.display = "none"
    pesquisaBotao.style.display = "none"
});

//Evitando que o clique na área de pesquisa feche a aba
pesquisaInput.addEventListener("click", function(evento) {
    evento.stopPropagation();
});

//Evento de clique no botão de pesquisa
pesquisaBotao.addEventListener("click", function(evento) {
    evento.stopPropagation(); //Evita que o clique se propague para o documento
    //Aqui pode adicionar a lógica para processar a pesquisa
});