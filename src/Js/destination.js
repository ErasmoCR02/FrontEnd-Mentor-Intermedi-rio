const items = document.querySelectorAll('.items-lista-destination');

const containers = document.querySelectorAll('.container1-destination');
const titulos = document.querySelectorAll('.titulo-planeta');
const textos = document.querySelectorAll('.texto-planeta');
const distancias = document.querySelectorAll('.informacoes-distancia');
const tempos = document.querySelectorAll('.informacoes-tempo');

function ativarItem(index) {
    const groups = [containers, titulos, textos, distancias, tempos];
    const activeClassMap = ['ativo', 'ativo', 'ativo', 'ativado', 'ativado'];

    groups.forEach((group, groupIndex) => {
        group.forEach((item) => {
            item.classList.remove(activeClassMap[groupIndex]);
            item.classList.add('desativado');
        });

        group[index].classList.remove('desativado');
        group[index].classList.add(activeClassMap[groupIndex]);
    });
}

items.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        ativarItem(index);
    });
});