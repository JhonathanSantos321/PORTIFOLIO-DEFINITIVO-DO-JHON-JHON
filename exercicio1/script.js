function somar(){
    let  num1 = Number(window.prompt("digite aqui o primeiro numero"));
    let  num2 = Number(window.prompt("digite aqui o segundo numero"));

    let resultado = num1 + num2 ;
    alert("O resultado da soma é " + resultado + ".")
}

let num1;
let num2;
let resultado;
let parouimpar

num1 = Number(window.prompt("digite um numero"));
num2 = Number(window.prompt("digite outro numero"));
 
resultado = num1 + num2;

parouimpar = resultado % 2;

if(parouimpar == 0){
    alert("o número " + resultado +" é par")
}else {
    alert("o número " + resultado + " é impar")
}

alert(resultado)

//DESAFIO:informe na frase se o número é par ou impar.



