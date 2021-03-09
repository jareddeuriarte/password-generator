var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symboles = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "{", "|", "}", "~"]
// // Assignment Code
// Write password to the #password input
function masterFunction() {
    var passLength = parseInt(
        prompt
            ('whats the length of the pw')
    );
    if (passLength < 8) {
        alert("the password must be at least 8 characters");
        return;
    }
    if (passLength > 128) {
        alert("The password must be less than 128 characters");
        return;
    }
    var randomUpper = confirm(
        ("Do you want to use uppercase letters?")
    )
    var randomLower = confirm(
        ("Do you want to use lowercase letters?")
    )
    var randomNumber = confirm(
        ("Do you want to use numbers?")
    )
    var randomSymbol = confirm(
        ("Do you want to use symbols?")
    )
    // if statement
    if (
        randomUpper === false &&
        randomLower === false &&
        randomNumber === false &&
        randomSymbol === false
    ) {
        alert('you must pick one character type');
        return;
    }
}
// function createPassword() {
//   var potentialPassword = []
//   var userSelectedPass =
// }
// referencing the button element
var generateBtn = document.querySelector("#generate");
// responsible for password input box
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
    var potentialPassword = []
    var userSelectedPass = []
    var finalPassword = []
}
//    if (randomLower
//    randomNumber
//    randomSymbol
//    randomUpper)
// }




var upperCase = Math.floor(Math.random() * options.upperCase);


//button is clickable as of now. When clicking on generate password we get undefined.
//still need to impliment prompts which is why it is undefined.
//prompts will decide what characters the password consists of, need to be stored in a variable.