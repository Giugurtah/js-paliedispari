
//*Script per il riconoscimento di parole/frasi palindrome
function isPalindroma(word) {
    var isPalindroma = true;
    // Utilizzo una variabile ausiliaria che prende la stringa, tutta in minuscolo con tutti gli spazi rimossi, in modo da riconoscere anche frasi palindrome e non solo parole.
    var auxWord = word.split(" ").join("").toLowerCase();
    for (var i=0; i<Math.floor(auxWord.length/2); i++) {
        if (auxWord.charAt(i) != auxWord.charAt(auxWord.length-i-1)) {
            isPalindroma = false;
        }
    }
    return isPalindroma;
}

document.getElementById("word_palindrome").addEventListener ("click", 
function() {
    //Richiesta parola
    var askedWord = prompt("Inserire una parola");

    //Preparazione messaggio a schermo
    var message = "<h1>Avrai inserito una parola palindroma?</h1><br>";
    if(isPalindroma(askedWord)) {
        message += "La parola/frase inserita è palindroma";
    } else {
        message += "La parola/frase inserita NON è palindroma";
    }

    //Stamoa a schermo
    document.getElementById("result_palindroma").innerHTML = message;
});


//*Script gioco dei numeri
//Funzione per controllare che la parola inseirta sia "pari" o "dispari"
function wordCheck (word) {
    while (word.toLowerCase() != "pari" && word.toLowerCase() != "dispari") {
        word = prompt("Hai inserito una scelta non valida. Inserire pari o dispari");
    }
    return word;
}
//Funzione per controllare che il numero sia inserito correttamente
function numberCheck (number) {
    while (!number || isNaN(number) || number.trim() == "" || number<0 || number>5) {
        number = prompt("Hi inserito una scelta non valida. Inserire un numero da 0 a 5");
    }
    return number;
}
//Funzione per controllare se il giocatore ha vinto o meno
function userWon (numberA, numberB, word) {
    var userWon = false;
    if(((numberA+numberB)%2==0 && word == "pari") || ((numberA+numberB)%2!=0 && word == "dispari")) {
        userWon = true;
    }
    return userWon;
}

document.getElementById("gioco_numeri").addEventListener("click", 
function() {
    //Richiesta scommessa utente
    var userBet = prompt("Scegli pari o dispari?");
    userBet = wordCheck(userBet);
    
    //Richiesta numero utente
    var userNumber = prompt("Scegli anche un numero da 1 a 5");
    userNumber = parseInt(numberCheck(userNumber));
    
    //Generazione numero random
    var pcNumber = Math.floor(Math.random() * 5 + 1);
    
    //Preparazione messaggio da stampare a schermo
    var message = "<h1>Avrai battuto il computer?</h1>";
    message += "Il computer ha scelto " + pcNumber + " che sommato a " +  userNumber + " da la somma " + (userNumber+pcNumber) + "<br> Hai puntato su una somma " + userBet + "<br>";
    
    if (userWon(userNumber, pcNumber, userBet)) {
        message += "<h2>Hai vinto!!</h2>";
    } else {
        message += "<h2>Hai perso</h2";
    }
    
    //Stama a schermo dell'esito della partita
    document.getElementById("result_gioco_numeri").innerHTML = message;
})

