function inserir(num) {
    document.querySelector('.resultado').innerHTML += num;
}

function limpar() {
    document.querySelector('.resultado').innerHTML = "";
}

function voltar() {
    let resultado = document.querySelector('.resultado').innerHTML;
    document.querySelector('.resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function confirmar () {
    let resultado = document.querySelector('.resultado').innerHTML;
    document.querySelector('.resultado').innerHTML = eval(resultado)
    if (resultado) {
        document.querySelector('.resultado').innerHTML = eval(resultado)
    } else {
        document.querySelector('.resultado').innerHTML ="Nenhum valor..."
    }
}
