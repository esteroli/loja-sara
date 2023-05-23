//Capturando os elementos do DOM
var pesquisaIcon = document.querySelector(".pesquisa-icon");
var pesquisaInput = document.getElementById("pesquisa-input");
var pesquisaBotao = document.getElementById("pesquisa-botao")

//Evento de clique no ícone de busca
pesquisaIcon.addEventListener("click", function() {
    pesquisaInput.style.display = "block";
    pesquisaBotao.style.display = "inline-block"
});

//Evento de clique fora da área de pesquisa para esconder a digitação
document.addEventListener("click", function(evento) {
    if(!evento.target.matches(".pesquisa-icon") && !evento.target.matches(".pesquisa-input")) {
        pesquisaInput.style.display = "none";
        pesquisaBotao.style.display = "none"
    }
});

//Evitando que o clique na área de pesquisa feche a aba
pesquisaInput.addEventListener("click", function(evento) {
    evento.stopPropagation();
});