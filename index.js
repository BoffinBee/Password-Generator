const pass1El = document.getElementById("pass-1");
const pass2El = document.getElementById("pass-2");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(characters);

function genKeys () {
    keys = "" ;
    for (let i = 0; i < 16; i++) {
        j = Math.floor((Math.random() * characters.length));
        keys += characters[j];
    }
    return keys;
}


function genPass() {
    pass1El.textContent = genKeys();
    pass2El.textContent = genKeys();
}