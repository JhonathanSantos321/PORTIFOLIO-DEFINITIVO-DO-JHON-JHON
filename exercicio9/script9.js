let mostraHTML = document.getElementById("mostraHTML");
let text
let OUTONO = ("ABRIL","MAIO","JUNHO")
let VERAO = ("DEZEMBRO","JANEIRO","FEVEREIRO","MARCO")
let PRIMAVERA = ("OUTUBRO,NOVEMBRO")
let INVERNO  = ("JULHO","AGOSTO","SETEMBRO")


function dias(){
    let frase

    let text = prompt("Digite um mes").ToUpperCase();

     frase = mostraHTML.innerHTML += `<p>Voce Esta no${num_adiv}.</p>`

     console.log(text);

    text = ("MARCO","DEZEMBRO","SETEMBRO","JUNHO","JANEIRO","FEVEREIRO","MAIO","AGOSTO","OUTUBRO","NOVEMBRO","ABRIL","JULHO");

    console.log(text)
   

    if(text = OUTONO){
        mostraHTML.innerHTML = `<p>Voce Esta no ${OUTONO}.</p>`
    }
    if(text = VERAO){
        mostraHTML.innerHTML = `<p>Voce Esta no ${VERAO}.</p>`
    }
    if(text = INVERNO){
        mostraHTML.innerHTML = `<p>Voce Esta no ${INVERNO}.</p>`
    }
    if(text = PRIMAVERA){
        mostraHTML.innerHTML = `<p>Voce Esta no ${PRIMAVERA}.</p>`
    }

}
