//Capturando os elementos do DOM
var pesquisaIcon = document.querySelector(".pesquisa-icon");
var pesquisaInput = document.getElementById("pesquisa-input");
var pesquisaBotao = document.getElementById("pesquisa-botao")

//Evento de clique no ícone de busca
pesquisaIcon.addEventListener("click", function() {
    pesquisaInput.style.display = "block";
    pesquisaBotao.style.display = "inline-block"

    setTimeout(function() {
        pesquisaInput.classList.remove("hidden");
        pesquisaBotao.classList.remove("hidden");
    }, 10) ; //Aguarda um pequeno intervalo para garantir que a transição seja aplicada corretamente
});

//Evento de clique fora da área de pesquisa para esconder a digitação
document.addEventListener("click", function(evento) {
    if(!evento.target.matches(".pesquisa-icon") && !evento.target.matches(".pesquisa-input")) {
        pesquisaInput.classList.add("hidden");
        pesquisaBotao.classList.add("hidden");
        setTimeout(function() {
            pesquisaInput.style.display = "none";
            pesquisaBotao.style.display = "none";
        }, 300); //Aguarda a duração da transição para ocultar os elementos completamente  
    }
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