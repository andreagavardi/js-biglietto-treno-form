


/* Partendo dall'esercizio fatto tempo fa, aggiungiamo la parte visiva come da screenshot
Creiamo un finto biglietto del treno con:
Nome passeggero
Codice treno (numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
Categoria selezionata dall'utente
Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form. */

var nomeUtenteEl = document.getElementById("utente");
var offertaEl = document.getElementById("offerta");
var prezzoEl = document.getElementById("prezzo");
var bottoneGenera = document.querySelector(".validazione .genera");



// numero casuale carrozza
var numCarrozza = Math.floor(Math.random()*(12-1))+1;
var carrozzaEl = document.getElementById("carrozza");


// numero casuale treno
var codiceTreno = Math.floor(Math.random()*(100000-90000))+90000;
var trenoEl = document.getElementById("cp");


var etaUtente = document.querySelector(".form-select").value;
var prezzoBiglietto = document.getElementById("km_percorso").value;

bottoneGenera.addEventListener('click', 
function(){
 nomeUtenteEl.innerHTML = document.getElementById("nome_utente").value;
 prezzoEl.innerHTML = (document.getElementById("km_percorso").value * 0.25);
 offertaEl.innerHTML = ' sconto ' + document.querySelector(".form-select").value;
 carrozzaEl.innerHTML = numCarrozza;
 trenoEl.innerHTML = codiceTreno;
});

var prezzoScontato = prezzoBiglietto * 0.6;
console.log(prezzoScontato);




//prezzo scontato in base all'età

//  if (etaUtente == 'minorenne') {
//     //va applicato uno sconto del 20% per i minorenn
//     prezzoScontato=prezzoChilometrico*0.8;
//     console.log(prezzoScontato);

//     } else if (etaUtente =='over65' ) {
//     //va applicato uno sconto del 40% per gli over 65.
//     prezzoScontato = prezzoChilometrico * 0.6;
//     console.log(prezzoScontato);

//     } else {
//         prezzoScontato=prezzoChilometrico;
//         console.log(prezzoScontato);

//         }
 

