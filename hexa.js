const listaCores = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

var button= document.getElementById('botao')
var span = document.getElementById('texto_cor')
var cor

function corRandomico(){
     
    var str = '#';

    while (str.length < 7) {
        str+=Math.floor(Math.random() * listaCores.length)
    }
return str
}


function quandoClicar(){

    cor =corRandomico()

    document.body.style.backgroundColor= cor
    span.textContent = cor
    }

button.addEventListener('click',quandoClicar)
