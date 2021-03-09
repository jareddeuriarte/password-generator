// Password Arrays

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "{", "|", "}", "~"]

// Master Function 

function generatePassword() {

    //User Specification Prompts
    var passLength = parseInt(
        prompt
            ('Enter password length between 8-128 characters.')
    );
    if (isNaN(passLength) === true) {
        alert("Password length must be a number.")
        return;
    }
    if (passLength < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }
    if (passLength > 128) {
        alert("Password must be less than 128 characters.");
        return;
    }
    var randomUpper = confirm(
        ("Would you like to include uppercase letters?")
    )
    var randomLower = confirm(
        ("Would you like to include lowercase letters?")
    )
    var randomNumber = confirm(
        ("Would you like to include numbers?")
    )
    var randomSymbol = confirm(
        ("Would you like to include symbols?")
    )

    // Alert 
    if (
        randomUpper === false &&
        randomLower === false &&
        randomNumber === false &&
        randomSymbol === false
    ) {
        alert('You must include one type of character.');
        return;
    }

    // Randomization Function 
    var allChar = []
    if (randomUpper === true) {
        allChar = allChar.concat(upperCase)
    }
    if (randomLower === true) {
        allChar = allChar.concat(lowerCase);
    }
    if (randomNumber === true) {
        allChar = allChar.concat(numbers);
    }
    if (randomSymbol === true) {
        allChar = allChar.concat(symbols);
    }
    var password = []
    console.log(typeof passLength)
    for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChar.length)
        password.push(allChar[randomIndex])
        console.log(i);
    }
    console.log(password);
    return password.join('');
};

var generateBtn = document.querySelector("#generate");

//Writing the Password
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

//Calling writePassword Function
generateBtn.addEventListener("click", writePassword);