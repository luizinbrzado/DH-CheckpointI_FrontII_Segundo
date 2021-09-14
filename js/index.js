// Coloca a classe "modal" na variável "modal"
const modal = document.querySelector('.modal');

// Coloca a classe "formFofoca" na variável "formFofoca"
const formFofoca = document.querySelector('.formFofoca');

// Coloca o id "AddCard" na variável "btnAddCard"
const btnAddCard = document.getElementById('addCard');

// Coloca o id "addFofoca" na variável "btnAddFormFofoca"
const btnAddFormFofoca = document.getElementById('addFofoca');

// Coloca o id "btnFechar" na variável "btnFecharFormFofoca"
const btnFecharFormFofoca = document.getElementById('btnFechar');

// Coloca o id "title" na variável "title"
const title = document.querySelector("#title");

// Coloca o id "description" na variável "desc"
const desc = document.querySelector("#description");

// Função que recarrega constantes para funcionar corretamente a exclusão dos cards pelo usuário
function reloadConsts() {
    // Coloca todas as classes "divfofoca" na variável "divFofoca"
    const divFofoca = document.querySelectorAll('.divfofoca');

    // Coloca todas as classes "excluirCard" na variável "rmvbtn"
    const rmvbtn = document.querySelectorAll('.excluirCard');

    // For que passa por todos os botões que existem na página
    for (let i = 0; i < rmvbtn.length; i++) {
        rmvbtn[i].addEventListener('click', () => { // Ao clicar em algum botão na página,
            divFofoca[i].remove();                  // a div que o contém é removido da página
        })
    };
};

// Listener que "escuta" tudo escrito no input armazenado na variável "desc"
desc.addEventListener("input", function (e) {
    // Coloca o id "counterDesc" na variável "counterDesc"
    const counterDesc = document.getElementById("counterDesc");

    // Coloca a quantidade de caracteres do input armazenado na variável "desc" na variável "inputDescLenght"
    const inputDescLenght = desc.value.length;

    // Coloca o valor do atributo "max-lenght" na variável "maxDescLenght"
    const maxDescLenght = desc.getAttribute('maxlength');

    // Coloca no HTML do id armazenado na variável "counterDesc" o máximo de caracteres escolhido
    // no atributo "maxlenght" menos a quantidade de caracteres colocado no input
    counterDesc.innerText = `${maxDescLenght - inputDescLenght}`;

    // Se a quantidade de caracteres no input for maior ou igual ao máximo de caracteres menos 30,
    // ou seja, quando estiver faltando menos de 30 caracteres ficará vermelho, se não ficará com a
    // cor escolhida no css
    if (inputDescLenght >= maxDescLenght - 30) {
        counterDesc.style.color = '#f00';
    } else {
        counterDesc.style.color = '';
    };
});

// Listener que "escuta" tudo escrito no input armazenado na variável "desc"
title.addEventListener("input", function (e) {
    // Coloca o id "counterTitle" na variável "counterTitle"
    const counterTitle = document.getElementById("counterTitle");

    // Coloca a quantidade de caracteres do input armazenado na variável "title" na variável "inputTitleLenght"
    const inputTitleLenght = title.value.length;
    
    // Coloca o valor do atributo "max-lenght" na variável "maxTitleLenght"
    const maxTitleLenght = title.getAttribute('maxlength');

    // Coloca no HTML do id armazenado na variável "counterDesc" o máximo de caracteres escolhido
    // no atributo "maxlenght" menos a quantidade de caracteres colocado no input
    counterTitle.innerText = `${maxTitleLenght - inputTitleLenght}`;

    // Se a quantidade de caracteres no input for maior ou igual ao máximo de caracteres menos 30,
    // ou seja, quando estiver faltando menos de 30 caracteres ficará vermelho, se não ficará com a
    // cor escolhida no css
    if (inputTitleLenght >= maxTitleLenght - 20) {
        counterTitle.style.color = '#f00';
    } else {
        counterTitle.style.color = '';
    };
});

// Listener que "escuta" o click no botão armazenado na variável btnAddCard
btnAddCard.addEventListener('click', (e) => {
    // Previne ação padrão
    e.preventDefault()

    // Cria um elemento "div" e o armazena na variável "div"
    let div = document.createElement("div");

    // Coloca um atributo classe com valor divfofoca no elemento div armazenado na variável "div"
    div.setAttribute("class", 'divfofoca');

    // Coloca o id "title" na variável "title"
    const title = document.querySelector("#title");

    // Coloca o id "description" na variável "desc"
    const desc = document.querySelector("#description");

    // Coloca o id "imgURL" na variável "imgURL"
    const imgURL = document.querySelector("#imgURL");

    // Coloca a classe "cards" na variável "cards"
    const cards = document.querySelector('.cards');

    // Se o valor do input armazenado na variável "title" não ter nada
    // sua borda ficará vermelha sólida com 2 pixels, se não ficará
    // com a borda escolhida no css
    // VALIDAÇÃO DO TÍTULO
    if (title.value == '') {
        title.style.border = '2px solid #f00';
    } else {
        title.style.border = '';
    }

    // Se o valor do input armazenado na variável "desc" não ter nada
    // sua borda ficará vermelha sólida com 2 pixels, se não ficará
    // com a borda escolhida no css
    // VALIDAÇÃO DA DESCRIÇÃO
    if (desc.value == '') {
        desc.style.border = '2px solid #f00';
    } else {
        desc.style.border = '';
    }

    // Se o valor do input armazenado na variável "imgURL" não ter nada
    // sua borda ficará vermelha sólida com 2 pixels, se não ficará
    // com a borda escolhida no css
    // VALIDAÇÃO DA IMAGEM
    if (imgURL.value == '') {
        imgURL.style.border = '2px solid #f00';
    } else {
        imgURL.style.border = '';
    }

    // Se o valor dos inputs armazenados na variáveis "title", "desc" e
    // "imgURL" estiverem com algum caracteres armazenado será colocado
    // no elemento "div" criado anterior uma escrita HTML predefinida    
    // COLOCA DADOS NO CARD
    if (title.value !== '' && desc.value !== '' && imgURL.value !== '') {
        div.innerHTML = `
            <img src="${imgURL.value}" alt="${title.value}">
            <h2>${title.value.toUpperCase()}</h2>
            <p>${desc.value}</p>
            <button class="excluirCard"><i class="fas fa-times"></i></button>
            `

        // Coloca tudo armazenado na variável "div" no HTML do elemento que
        // foi armazenado na variável "cards"
        cards.appendChild(div);

        // Coloca no HTML que foi armazenado a variável "counterTitle" o
        // conteúdo em texto igual ao valor do atributo "maxlenght" do
        // elemento armazenado na variável "title"
        counterTitle.textContent = title.getAttribute('maxlength');

        // Coloca no HTML que foi armazenado a variável "counterDesc" o
        // conteúdo em texto igual ao valor do atributo "maxlenght" do
        // elemento armazenado na variável "desc"
        counterDesc.textContent = desc.getAttribute('maxlength');

        // Deixa vazio o valor do input armazenado na variável "title"
        title.value = '';

        // Deixa vazio o valor do input armazenado na variável "desc"
        desc.value = '';

        // Deixa vazio o valor do input armazenado na variável "imgURL"
        imgURL.value = '';

        // Dá foco ao input armazenado na variável "title"
        title.focus();

        // Chama a função "reloadConsts"
        reloadConsts();
    }
});

btnAddFormFofoca.addEventListener('click', () => {

    // Coloca a classe "title" na variável "title"
    const title = document.querySelector("#title");

    // Coloca a classe "description" na variável "desc"
    const desc = document.querySelector("#description");

    // Coloca a classe "imgURL" na variável "imgURL"
    const imgURL = document.querySelector("#imgURL");

    // Muda o display do elemento armazenado na variável "modal" para "block"
    modal.style.display = 'block';

    // Muda o display do elemento armazenado na variável "formFofoca" para "block"
    formFofoca.style.display = 'block';

    // Deixa vazio o valor do input armazenado na variável "title"
    title.value = '';

    // Deixa vazio o valor do input armazenado na variável "desc"
    desc.value = '';

    // Deixa vazio o valor do input armazenado na variável "imgURL"
    imgURL.value = '';

});

// Listener que "escuta" o click no elemento armazenado na variável "btnFecharFormFofoca"
btnFecharFormFofoca.addEventListener('click', () => {

    // Muda o display do elemento armazenado na variável "formFofoca" para "none"
    formFofoca.style.display = 'none';

    // Muda o display do elemento armazenado na variável "modal" para "none"
    modal.style.display = 'none';
})

// Ao carregar a página, chama função "reloadConsts"
window.onload = () => {
    reloadConsts();
};