const botaoMenu = document.querySelector(".menu");
const listaDoMenu = document.querySelector(".lista-cabecalho");

if (botaoMenu && listaDoMenu) {
    botaoMenu.addEventListener('click', () => {
        listaDoMenu.classList.toggle("lista-cabecalho-ativo");
    });
}