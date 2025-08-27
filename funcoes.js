'use strict'

function calculoSoma(){
    let num1 = parseInt(document.getElementById('n1').value)
    let num2 = parseInt(document.getElementById('n2').value)

    let resultado = num1 + num2

    document.getElementById('result').innerHTML = resultado
}

function calculoSubi(){
    let num1 = parseInt(document.getElementById('n1').value)
    let num2 = parseInt(document.getElementById('n2').value)

    let resultado = num1 - num2

    document.getElementById('result').innerHTML = resultado
}

function calculoMult(){
    let num1 = parseInt(document.getElementById('n1').value)
    let num2 = parseInt(document.getElementById('n2').value)

    let resultado = num1 * num2

    document.getElementById('result').innerHTML = resultado
}

function calculoDivi(){
    let num1 = parseInt(document.getElementById('n1').value)
    let num2 = parseInt(document.getElementById('n2').value)

    let resultado = num1 / num2

    document.getElementById('result').innerHTML = resultado
}

//--------------------------------------------------------------

function calculoDesconto(){
    let nomeProduto = document.getElementById('produto')
    let quantidade = parseInt(document.getElementById('quant').value)
    let precoProduto = parseInt(document.getElementById('preco').value)
    let desconto = 0
    let totalDesconto = 0
    let descontoDescontado = 0

    let valor = quantidade * precoProduto

    if(quantidade <= 5){
        desconto = 2
        descontoDescontado = ( precoProduto * (desconto / 100))
        totalDesconto = valor - descontoDescontado

    }
    if(quantidade > 5){
        desconto = 3
        descontoDescontado = (precoProduto * (desconto / 100))
        totalDesconto = valor - descontoDescontado

    }
    if(quantidade > 10){
        desconto = 5
        descontoDescontado = ( precoProduto * (desconto / 100))
        totalDesconto = valor - descontoDescontado

    }

    document.getElementById('result').innerHTML = valor.toFixed(2)
    document.getElementById('resultSemDesc').innerHTML = totalDesconto.toFixed(2)
    document.getElementById('desconto').innerHTML = descontoDescontado.toFixed(2)

}

//------------------------------------------------------------------------------------------

function calculoSalario(){
    let nivel = parseInt(document.getElementById('n1').value)
    let aulas = parseInt(document.getElementById('n2').value)

    let total = 0

    if(nivel = 1){
        total = 12 * aulas
        document.getElementById('result').innerHTML = `R$ ${total.toFixed(2)}`

    }else if(nivel = 2){
        total = 17 * aulas
        document.getElementById('result').innerHTML = `R$ ${total.toFixed(2)}`
    }else if(nivel = 3){
        total = 25 * aulas
        document.getElementById('result').innerHTML = `R$ ${total.toFixed(2)}`
    }
}