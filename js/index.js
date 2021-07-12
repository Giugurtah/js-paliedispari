
//*Script per il riconoscimento di parole/frasi palindrome
function isPalindroma(word) {
    var isPalindroma = true;
    //Utilizzo una variabile ausiliaria che prende la stringa, tutta in minuscolo con tutti gli spazi rimossi, in modo da riconoscere anche frasi palindrome e non solo parole.
    var auxWord = word.split(" ").join("").toLowerCase();
    for (var i=0; i<Math.floor(auxWord.length/2); i++) {
        if (auxWord.charAt(i) != auxWord.charAt(auxWord.length-i-1)) {
            isPalindroma = false;
        }
    }
    return isPalindroma;
}

var askedWord = prompt("Inserire una parola");

var message = "";
if(isPalindroma(askedWord)) {
    message = "La parola/frase inserita è palindroma";
} else {
    message = "La parola/frase inserita NON è palindroma";
}
document.getElementById("result_palindroma").innerText = message;

//*Script gioco dei numeri
