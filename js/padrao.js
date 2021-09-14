/* HEADER */

// Coloca na variável "header" um HTML predefinido
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

// Se no título da página contém a exata escrita "Fofocas" (case sensitive)
if(document.title.includes('Fofocas')) {
    // Armazenada na variável "header" um HTML predefinido
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

// Coloca no elemento header um HTML predefinido na variável "header"
document.body.querySelector('header').innerHTML = header;

/* /HEADER */



/* FOOTER */

// Coloca na variável "footer" um HTML predefinido
let footer = `
<p>© Checkpoint I - Front End II</p>
`;

// Coloca no elemento footer um HTML predefinido na variável "footer"
document.body.querySelector('footer').innerHTML = footer;

/* /FOOTER */

/* FIXED BUTTON */

// Coloca na variável "fixedButton" um HTML predefinido
let fixedButton = `
    <a id="fixedButton" href="https://www.facebook.com/Fofoqueiros-An%C3%B4nimos-578004255573249/" target="_blank" rel="noreferrer noopener".>
        <img src="./img/saf.png" alt="Serviço de Atendimento ao Fofoqueiro" title="SAF - Serviço de Atendimento ao Fofoqueiro">
    </a>
`
// Coloca no elemento section um HTML predefinido na variável "section"
document.body.querySelector('section').innerHTML += fixedButton;

/* /FIXED BUTTON */