// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



console.log(generateBtn);



// This is to put the generated password in the text field.
document.getElementById("demo").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}








// Randomizer functions

function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//random upper case letter function
function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//random number function
function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//random symbol
function randomSymbol() {
    const symbols = '!@#$%^&*(){}.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(randomLower());
console.log(randomUpper());
console.log(randomNumber());
console.log(randomSymbol());




var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var symboles = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "{", "|", "}", "~"]

var passLength = 

function masterFunction() {
    var passLength = parseInt(
    prompt("What is the length of your password?")
    );

    var randomUpper = confirm(Would you like to include upper case letters?)

    if(upperCase)
}


