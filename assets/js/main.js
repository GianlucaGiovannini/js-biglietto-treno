/* 
DESCRIZIONE:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

// chiedere all'utente il suo nome e stampare
const user_name = prompt("Scrivi il tuo nome")
document.getElementById("user_name").innerHTML = user_name;


//chiedere all'utente il numero di km che vuole percorrere e l'età del che ha
const km_percorso = Number(prompt("Quanti km vuoi percorrere?"))
if (isNaN(km_percorso)) {
    alert("Inserisci il numero di km")
}
console.log(km_percorso);

const età_utente = Number(prompt("quanti anni hai ?"));
if (isNaN(età_utente)) {
    alert("Inserisci un numero")
}
console.log(età_utente);

// prezzo al km da percorrere
const prezzo_km = 0.21;

// prezzo utente senza sconti
const prezzo_utente = prezzo_km * km_percorso;

// calcolo sconti per età
const prezzo_minori = prezzo_utente * 0.8;

const prezzo_over_65 = prezzo_utente * 0.6;

// stampa il prezzo 
if (età_utente <= 18) {
    document.getElementById("prezzo_finale").innerHTML = "€ " + prezzo_minori.toFixed(2);
} else if (età_utente >= 65) {
    document.getElementById("prezzo_finale").innerHTML = "€ " + prezzo_over_65.toFixed(2);
} else {
    document.getElementById("prezzo_finale").innerHTML = "€ " + prezzo_utente.toFixed(2);
}

if (condition) {
    9
} else {

}