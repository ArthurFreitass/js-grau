let palavra = "palavra"

if (palavra) {
    let palavraInvertida = palavra.split('').reverse().join('').toLowerCase();
    let resultado = "";

    for (let i = 0; i < palavraInvertida.length; i++) {
        if (i % 2 === 0) {
            resultado += palavraInvertida[i].toUpperCase() + "\n";
        } else {
            resultado += palavraInvertida[i].toLowerCase() + "\n";
        }
    }
    console.log(resultado);
}
