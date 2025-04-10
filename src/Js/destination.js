const items = document.querySelectorAll('.items-lista-destination');

const containers = document.querySelectorAll('.container1-destination');
const titulos = document.querySelectorAll('.titulo-planeta');
const textos = document.querySelectorAll('.texto-planeta');
const distancias = document.querySelectorAll('.informacoes-distancia');
const tempos = document.querySelectorAll('.informacoes-tempo');

function ativarItem(index) {
    
    containers.forEach((container) => {
        container.classList.remove('ativo');
        container.classList.add('desativado');
    });

    titulos.forEach((titulo) => {
        titulo.classList.remove('ativo');
        titulo.classList.add('desativado');
    });

    textos.forEach((texto) => {
        texto.classList.remove('ativo');
        texto.classList.add('desativado');
    });

    distancias.forEach((distancia) => {
        distancia.classList.remove('ativado'); 
        distancia.classList.add('desativado'); 
    });

    tempos.forEach((tempo) => {
        tempo.classList.remove('ativado'); 
        tempo.classList.add('desativado'); 
    });

    
    containers[index].classList.remove('desativado');
    containers[index].classList.add('ativo');

    titulos[index].classList.remove('desativado');
    titulos[index].classList.add('ativo');

    textos[index].classList.remove('desativado');
    textos[index].classList.add('ativo');

    distancias[index].classList.remove('desativado');
    distancias[index].classList.add('ativado');

    tempos[index].classList.remove('desativado');
    tempos[index].classList.add('ativado');
}


items.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        ativarItem(index);
    });
});