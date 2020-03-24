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


//Start generatePassword Function 



var lowercases = "abcdefghijklmnopqrstuvwxyz";
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialCharacter = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
var pwCharacter = "";
var finalPW = "";

var askLower = confirm("Contains Lowercases?");
var askUpper = confirm("Contains Uppercases?");
var askNum = confirm("Contains Numeric?");
var askSpecial = confirm("Contains Special Character?");
var pwLength = prompt("Choose a length of PW : At least 8 characters and no more than 128 characters");
var intpwLength = parseInt(pwLength);

if (askLower===true){
  pwCharacter = pwCharacter + lowercases;
}

if (askUpper===true){
  pwCharacter = pwCharacter + uppercases;
}

if (askNum===true){
  pwCharacter = pwCharacter + numeric;
}

if (askSpecial===true){
  pwCharacter = pwCharacter + specialCharacter;
}


for (var i = 0; i < intpwLength; i++ ){
var ranNum = Math.floor(Math.random() * pwCharacter.length);
finalPW = finalPW + pwCharacter[ranNum];
}

console.log(finalPW);