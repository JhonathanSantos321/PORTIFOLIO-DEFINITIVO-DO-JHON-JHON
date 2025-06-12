let nomealuno;

nomealuno = (window.prompt("digite aqui seu nome"));

alert("seu nome é " + nomealuno + ".")

var nota1 = Number(window.prompt("digite sua nota: "));
var nota2 = Number(window.prompt("digite sua 2 nota: "));
var nota3 = Number(window.prompt("digite sua 3 nota: "));


let total = (nota1 + nota2 + nota3)/3;
alert("media final " + total);

if(total >= 60){
    alert(" voce atingiu a media " + total );
    alert( + nomealuno + " aprovado ");

var pontosfaltando = (total)-180;
}else {
    alert("reprovado faltaram" + pontosfaltando + " pontos ");
}


  










