function insert(num) {
    const lista_operadores = ['+', '-', '*', '/']
    var numero = document.getElementById('visor').innerHTML;

    if (!(lista_operadores.includes(numero.slice(-1)) && lista_operadores.includes(num))) {
        document.getElementById('visor').innerHTML = numero + num;
    }
}

function clean() {
    document.getElementById('visor').innerHTML = "";
}

function calcular() {
    var resultado = document.getElementById('visor').innerHTML;
    if (resultado) {
        document.getElementById('visor').innerHTML = eval(resultado);
    } else {
        document.getElementById('visor').innerHTML = "Nada...";
    }
}
