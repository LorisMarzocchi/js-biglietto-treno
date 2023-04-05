


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
const prezzChilometro = 0.21;
const prezzoBase = prezzChilometro * num_chilometri;
const sconto_minori = (prezzoBase * 20) / 100;
const sconto_maggiori = (prezzoBase * 40) / 100;
const prezzo_minori_scontato = prezzoBase - sconto_minori;
const prezzo_maggiori_scontato = prezzoBase - sconto_maggiori;
const no_sconto = ' prezzo intero: '+ (prezzoBase) + '€';
if (eta_passeggero < 18 ) {
    
    const risultato_minori = prezzo_minori_scontato.toFixed(2);
    document.getElementById('prezzo').innerHTML = risultato_minori  + '€';
}else if(eta_passeggero > 65){
    
    const risultato_maggiori = prezzo_maggiori_scontato.toFixed(2);
    document.getElementById('prezzo').innerHTML = risultato_maggiori  + '€';
}
else{
    
    const prezzo_non_scontato = prezzoBase.toFixed(2);
    document.getElementById('prezzo').innerHTML = prezzo_non_scontato;
}
