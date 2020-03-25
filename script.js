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

//make generatePassword Function 

function generatePassword(){

  //Set Vars we need
  var lowercases = "abcdefghijklmnopqrstuvwxyz";
  var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialCharacter = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
  var pwCharacter = "";
  var finalPW = "";

  //return values we need
  var askLower = confirm("Contains Lowercases?");
  var askUpper = confirm("Contains Uppercases?");
  var askNum = confirm("Contains Numeric?");
  var askSpecial = confirm("Contains Special Character?");
  var pwLength = prompt("Choose a length of PW : At least 8 characters and no more than 128 characters");
  var intpwLength = parseInt(pwLength);

  //set exception for invalid length
  while (intpwLength<8 || intpwLength>128){
    pwLength = prompt("Invalid length of PW : At least 8 characters and no more than 128 characters");
    intpwLength = parseInt(pwLength);
  }
  
  //set conditions
  if (askLower === true) {
    pwCharacter = pwCharacter + lowercases;
  }

  if (askUpper === true) {
    pwCharacter = pwCharacter + uppercases;
  }

  if (askNum === true) {
    pwCharacter = pwCharacter + numeric;
  }

  if (askSpecial === true) {
    pwCharacter = pwCharacter + specialCharacter;
  }

  //loop for creating pw
  for (var i = 0; i < intpwLength; i++) {
    var ranNum = Math.floor(Math.random() * pwCharacter.length);
    finalPW = finalPW + pwCharacter[ranNum];
  }

  //return the pw
  return finalPW;

}

