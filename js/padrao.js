/* HEADER */

let header = `
<a href="./index.html"><img src="./img/fofoca.jpg" alt=""></a>
<ul>
    <a id="index" href="./equipe.html"><li>Equipe</li></a>
    <a href="./contato.html"><li>Contato</li></a>
</ul>
`;

if(window.location.href.includes('index')) {
    header = `
    <a href="./index.html"><img src="./img/fofoca.jpg" alt=""></a>
    <ul>
        <button id="addFofoca">Criar fofoca</button>
        <a id="index" href="./equipe.html"><li>Equipe</li></a>
        <a href="./contato.html"><li>Contato</li></a>
    </ul>`
}

document.body.querySelector('header').innerHTML = header;

/* /HEADER */



/* FOOTER */

let footer = `
<p>© Checkpoint I - Front End II</p>
`;

document.body.querySelector('footer').innerHTML = footer;

/* /FOOTER */