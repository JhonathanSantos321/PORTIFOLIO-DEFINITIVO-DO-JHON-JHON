let cliques = 0;
let mostraHTML = document.getElementById("mostraHTML");
let zerar 

function contador(){
    
    cliques++;

    mostraHTML.innerHTML = `<p> Numero de cliques: ${cliques}</p>`;
    console.log(cliques);
    
    
    
}

function zero(){

    cliques = 0;

    

  mostraHTML.innerHTML = `<p> Numero de cliques: ${cliques}</p>`;
    console.log(cliques);



}