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

function calculoSemDesconto(){
    let nomeProduto = document.getElementById('produto')
    let quantidade = parseInt(document.getElementById('quant').value)
    let precoProduto = parseInt(document.getElementById('preco').value)

    let valor = quantidade * precoProduto

    document.getElementById('result').innerHTML = valor
}