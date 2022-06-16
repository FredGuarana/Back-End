
function mudaParagrafo() {

    let nome = window.prompt("Qual é o seu nome?");
    let elementoHTML = window.document.getElementById("Texto para alterar");
    elementoHTML.innerHTML =
    `<p>Olá, <strong>${nome}</strong>!` + 
    `É um grande prazer te conhecer! &#1F596;`;
}