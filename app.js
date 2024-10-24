let listaNumerosSorteados = [];
let numeroLimite = 10;

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log("esse é o numero secreto: "+ numeroSecreto)

function exibirTextoSelector(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female" ,{rate:1.2});
} 

function mensagemInicial() {
    exibirTextoSelector("h1", "jogo do número secreto");
    exibirTextoSelector("p", "escolha um numero de 1 a 10");
}

exibirTextoSelector("h1", "jogo do número secreto");
exibirTextoSelector("p", "escolha um numero de 1 a 10");

function verificarChute() {

    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoSelector("h1", "você acertou em cheio!!!");
        exibirTextoSelector("p", `você acertou com ${tentativas} ${tentativas == 1 ? "tentativa" : "tentativas"}. `);
        //remover o atributo do botao reiniciar
        document.getElementById("reiniciar").removeAttribute("disabled");
        //setar um atributo botao chutar
        document.getElementById("chutar").setAttribute("disabled",true);
    
    } else {
        exibirTextoSelector("h1", "errou :(");
        exibirTextoSelector("p",`o numero é ${chute>numeroSecreto?"menor":"maior"} que ${chute==isNaN(chute)? "NaN" : chute}. `)
    }

    tentativas++;
    console.log(tentativas);
    console.log(listaNumerosSorteados);
    
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantitdadeDeElementosNaLista = listaNumerosSorteados.length;

    if (quantitdadeDeElementosNaLista == numeroLimite) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados == numeroEscolhido) {
        return gerarNumeroAleatorio()
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
    
}

function reiniciarJogo() {
    mensagemInicial();
    limparCampo();
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    console.log("novo numero secreto: " + numeroSecreto);
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("chutar").removeAttribute("disabled");
}