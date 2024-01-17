const passwordBox = document.getElementById("password");
const length = 10;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = '~`!@#$%^&*()_-+={["}]|\:;<,>.?/';
const specialSymbol = "@#&$ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allCharacters = upperCase+lowerCase+number+symbol;

function generate(){
    let password = "";
    password += specialSymbol[Math.floor(Math.random() * specialSymbol.length)];
    while(password.length < 4){
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    while(password.length < length-1){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    password += symbol[Math.floor(Math.random() * symbol.length)];
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}
