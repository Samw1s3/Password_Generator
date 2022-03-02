// Assignment Code
const generateBtn = document.querySelector("#generate");
const textareaPassword = document.getElementById("password");
const divError = document.getElementById(div-error);

const lowercaseSet = "abcdefghijklmnopqrstuvwxyz"
const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const symbolsSet = "!@#$%^&*_+-="
const numbersSet = "0123456789"

function generatePassword() {
  const inputPasswordlength = prompt("How many characters would you like your password to be?", "type number from 8-120 here");
  const inputPasswordLowerCase = window.confirm("Include lower case letters?");
  const inputPasswordUpperCase = window.confirm("Include upper case letters?");
  const InputPasswordSpecialCharc = window.confirm("Include special characters?"); 
}

function writePassword() {
  var password = generatePassword();
  textareaPassword.textContent = password;

// When the button is clicked 
generateBtn.addEventListener("click", writePassword 

  const passwordLength = Number(inputPasswordLength)
 

  let charset = "";

  //const wantsLowercase =  
 // const wantsUppercase = 
  //const wantsSymbols = 
  //const wantsNumbers = 


  // in my password

  if(!wantsLowercase && !wantsUppercase && !wantsSymbols && !wantsNumbers ){
    // show alert
    divError.textContent = "Please confirm at lease 1 selection";
    return;
  }
  // Once user has confirmed selections

  if(wantsLowercase){
    charset = charset + lowercaseSet;
  }
  if(wantsUppercase){
    charset = charset + uppercaseSet;
  }
  if(wantsSymbols){
    charset = charset + symbolsSet;
  }
  if(wantsNumbers){
    charset = charset + numbersSet;
  }
})

//then the app will generate a password

  let password = "";


//loop for each passwordLength times,

for (let index = 0; index < passwordLength; index++) {
  const randomIndex = Math.floor(Math.random() * charset.length)

  const randomChar = charset[randomIndex];

  password = password + randomChar;
}

// show password on webpage








// When the user inputs a number for the length of that password

inputpasswordLength.addEventListener( 'input', function(event){

});






  var passwordText = document.querySelector("#password");

  passwordText.value = password;







}

