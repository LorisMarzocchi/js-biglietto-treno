


/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/
 



const num_chilometri = parseInt(prompt('Quanti chilometri?'));
const eta_passeggero = parseInt(prompt('quanti anni hai?'));

const prezzo_minori_scontato = (0.21 * num_chilometri) - (((0.21 * num_chilometri) * 20) / 100);
const prezzo_maggiori_scontato = (0.21 * num_chilometri) - (((0.21 * num_chilometri) * 40) / 100);

if (eta_passeggero < 18) {

    document.getElementById('prezzo').innerHTML = (prezzo_minori_scontato.toFixed(2)) + '€';
} else if (eta_passeggero > 65) {

    document.getElementById('prezzo').innerHTML = (prezzo_maggiori_scontato.toFixed(2)) + '€';
}
else {

    document.getElementById('prezzo').innerHTML = (('prezzo non scontato: ') + (0.21 * num_chilometri).toFixed(2)) + '€';
}
