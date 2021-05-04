


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
var bottoneAnnulla = document.querySelector(".validazione .annulla");


// numero casuale carrozza
var numCarrozza = Math.floor(Math.random()*(12-1))+1;
var carrozzaEl = document.getElementById("carrozza");


// numero casuale treno
var codiceTreno = Math.floor(Math.random()*(100000-90000))+90000;
var trenoEl = document.getElementById("cp");


bottoneGenera.addEventListener('click', 
function(){
 nomeUtenteEl.innerHTML = document.getElementById("nome_utente").value;
 
 var prezzoBiglietto = document.getElementById("km_percorso").value;
 var prezzoKilometrico = prezzoBiglietto * 0.25;
 var prezzoScontato;

 var etaUtente = document.querySelector(".form-select").value;

    if (etaUtente == 'minorenne') {
    //va applicato uno sconto del 20% per i minorenn
    prezzoScontato=prezzoKilometrico * 0.8;
    messaggioSconto = 'sconto 20%';
    console.log(prezzoScontato);

    } else if (etaUtente =='over65' ) {
    //va applicato uno sconto del 40% per gli over 65.
    prezzoScontato = prezzoKilometrico * 0.6;
    messaggioSconto = 'sconto 40%';
    console.log(prezzoScontato);

    }  else {
        prezzoScontato = prezzoKilometrico;
         messaggioSconto = 'nessuno sconto applicato';
        console.log(prezzoScontato);

        }

 prezzoEl.innerHTML = prezzoScontato + '€';
 offertaEl.innerHTML = messaggioSconto;
 carrozzaEl.innerHTML = numCarrozza;
 trenoEl.innerHTML = codiceTreno;
 
});


bottoneAnnulla.addEventListener('click', 
function(){
 document.getElementById("nome_utente").value = "";
 document.getElementById("km_percorso").value = "";
 offertaEl.innerHTML = "";
 carrozzaEl.innerHTML = "";
 trenoEl.innerHTML = "";
 prezzoEl.innerHTML = "";
 nomeUtenteEl.innerHTML = "";
});

 