const modal = document.querySelector('.modal');
const formFofoca = document.querySelector('.formFofoca');
const btnAddCard = document.getElementById('addCard');
const btnAddFormFofoca = document.getElementById('addFofoca');
const btnFecharFormFofoca = document.getElementById('btnFechar')
const title = document.querySelector("#title");
const desc = document.querySelector("#description");

function reloadConsts() {
    const divFofoca = document.querySelectorAll('.divfofoca');
    const rmvbtn = document.querySelectorAll('.excluirCard');

    for (let i = 0; i < rmvbtn.length; i++) {
        rmvbtn[i].addEventListener('click', () => {
            divFofoca[i].remove();
        })
    };
};

desc.addEventListener("input", function (e) {
    const counterDesc = document.getElementById("counterDesc");
    const inputDescLenght = desc.value.length;

    const maxDescLenght = desc.getAttribute('maxlength');

    counterDesc.innerText = `${maxDescLenght - inputDescLenght}`;
    if (inputDescLenght >= maxDescLenght-30) {
        counterDesc.style.color = '#f00';
    } else {
        counterDesc.style.color = '';
    };
});

title.addEventListener("input", function (e) {
    const counterTitle = document.getElementById("counterTitle");
    const inputTitleLenght = title.value.length;

    const maxTitleLenght = title.getAttribute('maxlength');

    counterTitle.innerText = `${maxTitleLenght - inputTitleLenght}`;
    if (inputTitleLenght >= maxTitleLenght-20) {
        counterTitle.style.color = '#f00';
    } else {
        counterTitle.style.color = '';
    };
});

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
        title.style.border = '';
    }

    // VALIDAÇÃO DA DESCRIÇÃO
    if (desc.value == '') {
        desc.style.border = '2px solid #f00';
    } else {
        desc.style.border = '';
    }

    // VALIDAÇÃO DA IMAGEM
    if (imgURL.value == '') {
        imgURL.style.border = '2px solid #f00';
    } else {
        imgURL.style.border = '';
    }

    // COLOCA DADOS NO CARD
    if (title.value !== '' && desc.value !== '' && imgURL.value !== '') {
        div.innerHTML = `
            <img src="${imgURL.value}" alt="${title.value}">
            <h2>${title.value.toUpperCase()}</h2>
            <p>${desc.value}</p>
            <button class="excluirCard"><i class="fas fa-times"></i></button>
            `

        cards.appendChild(div);

        counterTitle.textContent = title.getAttribute('maxlength');
        counterDesc.textContent = desc.getAttribute('maxlength');

        // title.value = '';
        // desc.value = '';
        // imgURL.value = '';

        title.focus();

        reloadConsts();
    }
})

btnAddFormFofoca.addEventListener('click', () => {
    const title = document.querySelector("#title");
    const desc = document.querySelector("#description");
    const imgURL = document.querySelector("#imgURL");

    modal.style.display = 'block';
    formFofoca.style.display = 'block';

    title.value = '';
    desc.value = '';
    imgURL.value = '';

})

btnFecharFormFofoca.addEventListener('click', () => {
    formFofoca.style.display = 'none';
    modal.style.display = 'none';
})

window.onload = () => {
    reloadConsts()
}