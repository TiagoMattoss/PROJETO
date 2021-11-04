const listaCores = ['green','#FA67CD','#777ABC','rgb(200,45,0)']

var button= document.getElementById('botao')
var input = document.getElementById('input_cor')
var span = document.getElementById('texto_cor')

function numeroRandomico(){
    return Math.floor(Math.random() * listaCores.length)
}

function quandoClicar(){

    var cor 

    if(input.value){

        cor= input.value
    }else{
        var randomico=numeroRandomico()
        cor= listaCores[randomico]
    }

    document.body.style.backgroundColor= cor
    span.textContent = cor

}
function numeroHex(){
    
}

button.addEventListener('click',quandoClicar)
