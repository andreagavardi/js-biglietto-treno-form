


/* Partendo dall'esercizio fatto tempo fa, aggiungiamo la parte visiva come da screenshot
Creiamo un finto biglietto del treno con:
Nome passeggero
Codice treno (numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
Categoria selezionata dall'utente
Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form. */

var nomeUtenteEl = document.getElementById("nome_utente");
var kmUtenteEl = document.getElementById("km_percorso");

//document.getElementById("nome_utente").value

var bottoneGenera = document.querySelector(".validazione .genera");
// bottoneGenera.addEventListener('click' )
console.log(bottoneGenera);

// numero casuale carrozza
var numCarrozza = Math.floor(Math.random()*(12-1))+1;
var carrozzaEl = document.getElementById("carrozza");
carrozzaEl.innerHTML = numCarrozza;

// numero casuale treno
var codiceTreno = Math.floor(Math.random()*(100000-90000))+90000;
console.log(codiceTreno);
var trenoEl = document.getElementById("cp");
trenoEl.innerHTML = codiceTreno;

