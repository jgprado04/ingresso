let quantPista = 100;
let quantSuper = 200;
let quantInf = 400;

function comprar() {
    let tipoIngresso = document.querySelector("#tipo-ingresso")
    let ingresso = tipoIngresso.value;
    let naQuant = document.querySelector("#qtd");
    let quantidade = naQuant.value;

    if(isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor insira valores corretos para a quantidade!");
        naQuant.value = "";
        naQuant.focus();
        return;
    }

    if(ingresso == "pista") {
        if(quantidade > quantPista) {
            alert("A sua quantidade é maior do que tem disponível, tente novamente! " + "Quantidade Disponível: " + quantPista);
            naQuant.value = "";
            naQuant.focus();
            return;
        }
        quantPista -= quantidade;
    } 

    if(ingresso == "superior") {
        if(quantidade > quantSuper) {
            alert("A sua quantidade é maior do que tem disponível, tente novamente! " + "Quantidade Disponível: " + quantSuper);
            naQuant.value = "";
            naQuant.focus();
            return;
        }
        quantSuper -= quantidade;
    } 

    if(ingresso == "inferior") {
        if(quantidade > quantInf) {
            alert("A sua quantidade é maior do que tem disponível, tente novamente! " + "Quantidade Disponível: " + quantInf);
            naQuant.value = "";
            naQuant.focus();
            return;
        }
        quantInf -= quantidade;
    } 

    verificar(quantidade, ingresso);
   

    trocarMensagem();
}

function trocarMensagem() {
    let pista = document.querySelector("#qtd-pista");
    let superior = document.querySelector("#qtd-superior");
    let inferior = document.querySelector("#qtd-inferior");

    pista.textContent = quantPista;
    superior.textContent = quantSuper;
    inferior.textContent = quantInf
}