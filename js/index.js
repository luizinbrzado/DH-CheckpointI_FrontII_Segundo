const formFofoca = document.querySelector('.formFofoca');
const btnAddCard = document.getElementById('addCard');
const btnAddFormFofoca = document.getElementById('addFofoca');
const btnFecharFormFofoca = document.getElementById('btnFechar')
const cards = document.querySelector('.cards');

btnAddCard.addEventListener('click', (e) => {
    e.preventDefault()
    let div = document.createElement("div");
    div.setAttribute("class", 'divfofoca');

    const title = document.querySelector("#title");
    const desc = document.querySelector("#description");
    const imgURL = document.querySelector("#imgURL");
    const cards = document.querySelector('.cards');

    // VALIDAÇÃO DO TÍTULO
    if (title.value == '') {
        title.style.border = '2px solid #f00';
    } else {
        title.style.border = '2px solid #f3f3f3';
    }

    // VALIDAÇÃO DA DESCRIÇÃO
    if (desc.value == '') {
        desc.style.border = '2px solid #f00';
    } else {
        desc.style.border = '2px solid #f3f3f3';
    }

    // VALIDAÇÃO DA IMAGEM
    if (imgURL.value == '') {
        imgURL.style.border = '2px solid #f00';
    } else {
        imgURL.style.border = '2px solid #f3f3f3';
    }

    // COLOCA DADOS NO CARD
    if (title.value !== '' && desc.value !== '' && imgURL.value !== '') {
        div.innerHTML = `
            <img src="${imgURL.value}" alt="${title.value}">
            <h2>${title.value.toUpperCase()}</h2>
            <p>${desc.value}</p>
            `

        cards.appendChild(div);

       /*  title.value = "";
        desc.value = "";
        imgURL.value = ""; */

        title.focus();
    }
})

btnAddFormFofoca.addEventListener('click', () => {
    const formFofoca = document.querySelector('.formFofoca');
    const title = document.querySelector("#title");
    const desc = document.querySelector("#description");
    const imgURL = document.querySelector("#imgURL");

    formFofoca.style.display = 'block';

    title.value = '';
    title.style.border = '2px solid #131921';

    desc.value = '';
    desc.style.border = '2px solid #131921';

    imgURL.value = '';
    imgURL.style.border = '2px solid #131921';
})

btnFecharFormFofoca.addEventListener('click', () => {
    formFofoca.style.display = 'none';
})