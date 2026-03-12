const palavras = [
"grau",
"javascript",
"forca",
"tecnico",
"programador",
"computador",
"internet"
];

let palavraAtual = "";
let letrasCorretas = [];
let letrasErradas = [];
let tentativasRestantes = 6;

const desenhos = [
`
 +---+
 |   |
     |
     |
     |
     |
=========`,
`
 +---+
 |   |
 O   |
     |
     |
     |
=========`,
`
 +---+
 |   |
 O   |
 |   |
     |
     |
=========`,
`
 +---+
 |   |
 O   |
/|   |
     |
     |
=========`,
`
 +---+
 |   |
 O   |
/|\\  |
     |
     |
=========`,
`
 +---+
 |   |
 O   |
/|\\  |
/    |
     |
=========`,
`
 +---+
 |   |
 O   |
/|\\  |
/ \\  |
     |
=========`
];

function escolherPalavra(){

const index = Math.floor(Math.random() * palavras.length);

palavraAtual = palavras[index];

letrasCorretas = [];
letrasErradas = [];

tentativasRestantes = 6;

document.getElementById("letra").disabled = false;

atualizarTela();
}

function atualizarTela(){

const display = palavraAtual
.split("")
.map(letra => letrasCorretas.includes(letra) ? letra : "_")
.join(" ");

document.getElementById("palavra-secreta").textContent = display;

document.getElementById("letras-erradas").textContent = letrasErradas.join(", ");

document.getElementById("tentativas").textContent = tentativasRestantes;

document.getElementById("desenho").textContent = desenhos[6 - tentativasRestantes];
}

function verificarLetra(){

const input = document.getElementById("letra");

let letra = input.value.toLowerCase();

input.value = "";

if(!letra || letra.length !== 1){
return;
}

if(letrasCorretas.includes(letra) || letrasErradas.includes(letra)){
alert("Você já tentou essa letra!");
return;
}

if(palavraAtual.includes(letra)){

letrasCorretas.push(letra);

}else{

letrasErradas.push(letra);

tentativasRestantes--;

}

atualizarTela();

verificarFimDeJogo();
}

function verificarFimDeJogo(){

const venceu = palavraAtual
.split("")
.every(letra => letrasCorretas.includes(letra));

if(venceu){

document.getElementById("mensagem").textContent = "🎉 Você venceu!";

desativarJogo();

}

else if(tentativasRestantes === 0){

document.getElementById("mensagem").textContent =
"💀 Você perdeu! A palavra era: " + palavraAtual;

desativarJogo();
}
}

function desativarJogo(){

document.getElementById("letra").disabled = true;

}

function novoJogo(){

document.getElementById("mensagem").textContent = "";

escolherPalavra();
}

escolherPalavra();
