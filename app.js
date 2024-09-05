function sortear(){
    let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value)
    let numeroInicial = parseInt(document.getElementById("de").value)
    let numeroFinal = parseInt(document.getElementById("ate").value)
    let numeroSorteado = []
    let numero
    if(numeroInicial >=  numeroFinal){
        alert("Numero inicial é maior que o numero final");
        return
    }
    if(numeroFinal - numeroInicial< quantidadeDeNumeros){
        alert("Intervalo de numeros menor que quantidade de numeros sorteados, verifique!")
        return
    }
    for(let i = 0; i<quantidadeDeNumeros; i++){
        numero = obterNumeroAleatório(numeroInicial, numeroFinal);
        while(numeroSorteado.includes(numero)){
            numero.obterNumeroAleatório(numeroInicial, numeroFinal)
        }
        numeroSorteado.push(numero)
    }
    mostrarNumeros(numeroSorteado)
    
}

function mostrarNumeros(numeroSorteado){
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeroSorteado}</label>`
    alterarStatusBotao()
}

function alterarStatusBotao(){
    const btnReiniciar = document.getElementById("btn-reiniciar")
    if(btnReiniciar.classList.contains("container__botao-desabilitado")){
        btnReiniciar.classList.remove("container__botao-desabilitado")
        btnReiniciar.classList.add("container__botao")
    }else{
        btnReiniciar.classList.remove("container__botao")
        btnReiniciar.classList.add("container__botao-desabilitado")
    }
}

function obterNumeroAleatório(min, max){
    return Math.floor(Math.random()* (max-min+1))+ min
}

function reiniciar(){
    document.getElementById("quantidade").value = ""
    document.getElementById("de").value = ""
    document.getElementById("ate").value = ""
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao()
}