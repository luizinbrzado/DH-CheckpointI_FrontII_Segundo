/* HEADER */

let header = `
<nav>
    <a href="./index.html"><img src="./img/fofoca.jpg" alt=""></a>
    <div>
        <ul>
            <li><a id="index" href="./equipe.html">Equipe</a></li>
            <li><a href="./contato.html">Contato</a></li>
        </ul>
    </div>
</nav>
`;

if(document.title.includes('Fofocas')) {
    header = `
    <nav>
        <a href="./index.html"><img src="./img/fofoca.jpg" alt=""></a>
        <div>
            <button id="addFofoca">Criar fofoca</button>
            <ul>
                <li><a id="index" href="./equipe.html">Equipe</a></li>
                <li><a href="./contato.html">Contato</a></li>
            </ul>
        </div>
    </nav>`
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
        <img src="./img/saf.png" alt="Serviço de Atendimento ao Fofoqueiro" title="SAF - Serviço de Atendimento ao Fofoqueiro">
    </a>
`
document.body.querySelector('section').innerHTML += fixedButton;

/* /FIXED BUTTON */