// character pool
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// html elements
const generateBtn = document.getElementById("generate-btn");
const password1El = document.getElementById("password-1-el");
const password2El = document.getElementById("password-2-el");


function generatePasswords() {
    // reset displayed values
    password1El.textContent = "";
    password2El.textContent = "";
    // generate password 1
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        let randomCharacter = characters[randomIndex];
        password1El.textContent += randomCharacter;
    }
    // generate password 2 
    for (let i = 0; i < 15; i++) {
        randomIndex = Math.floor(Math.random() * characters.length);
        randomCharacter = characters[randomIndex];
        password2El.textContent += randomCharacter;
       }
}

generateBtn.addEventListener("click", generatePasswords);