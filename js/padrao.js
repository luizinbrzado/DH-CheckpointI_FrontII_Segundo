/* HEADER */

let header = `
<a href="./fofocas.html"><img src="./img/fofoca.jpg" alt=""></a>
<div>
    <a id="fofocas" href="./equipe.html">Equipe</a>
    <a href="./contato.html">Contato</a>
</div>
`;

if(window.location.href.includes('fofocas')) {
    header = `
    <a href="./fofocas.html"><img src="./img/fofoca.jpg" alt=""></a>
    <div>
        <button id="addFofoca">Criar fofoca</button>
        <a id="fofocas" href="./equipe.html">Equipe</a>
        <a href="./contato.html">Contato</a>
    </div>`
}

document.body.querySelector('header').innerHTML = header;

/* /HEADER */



/* FOOTER */

let footer = `
<p>© Checkpoint I - Front End II</p>
`;

document.body.querySelector('footer').innerHTML = footer;

/* /FOOTER */

/* FIXED BUTTON */

let fixedButton = `
    <a id="fixedButton" href="https://www.facebook.com/Fofoqueiros-An%C3%B4nimos-578004255573249/" target="_blank" rel="noreferrer noopener".>
        <img src="./img/saf.png" alt="Serviço de Atendimento ao Fofoqueiro">
    </a>
`
document.body.querySelector('main').innerHTML += fixedButton;

/* /FIXED BUTTON */