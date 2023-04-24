// character pool
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// html elements
const generateBtn = document.getElementById("generate-btn");
const password1El = document.getElementById("password-1-el");
const password2El = document.getElementById("password-2-el");
const lengthEl = document.getElementById("length-el");
const lengthValue = document.getElementById("length-value");


function generatePasswords() {
    password1El.textContent = createPassword();
    password2El.textContent = createPassword();
}

function createPassword() {
    let password = "";
    const length = lengthEl.value;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomCharacter = characters[randomIndex];
        password += randomCharacter;
    }
    return password;
}

// show selected length value next to slider
function displayLength() {
    lengthValue.textContent = lengthEl.value;
}

generateBtn.addEventListener("click", generatePasswords);
lengthEl.addEventListener("change", displayLength);