function contar(){
     let mostraHTML = document.getElementById("mostraHTML");

     let contador = 1;

     while (contador <= 10) {

        mostraHTML.innerHTML += `<p> ${contador}  &#128524; </p>`
        contador++;

     }

        

     
}