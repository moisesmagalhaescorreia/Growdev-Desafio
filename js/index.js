var nome = "NósÉ Pensante Mermão";
var cargo ="Desenvolvedor";

var nomeCandidato = document.getElementById("nome-candidato");
var cargoHtml = document.getElementById("cargo-pretendido");
var texto1 = document.getElementById("texto-1")
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome){
    nomeCandidato.innerHTML = nome;
}
function colocarCargoNoHtml(cargo){
    cargoHtml.innerHTML = cargo;
}
function logarNome(){
    console.log(nome);
}
function cliqueProjetos(){
    console.log("Clicou no botão projetos");
    texto1.style.display = "none"
    texto2.style.display = "block"
}
function cliqueSobre(){
    console.log("Clicou no botão sobre");
    texto1.style.display = "block"
    texto2.style.display = "none"
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);