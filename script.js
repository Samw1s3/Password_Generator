// Assignment Code

const textareaPassword = document.getElementById("password");
const divError = document.getElementById("div-error");

const lowercaseSet = "abcdefghijklmnopqrstuvwxyz"
const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const symbolsSet = "!@#$%^&*_+-="
const numbersSet = "0123456789"

// Generate password button
const generateBtn = document.querySelector("#generate");
function generatePassword(){
  
  const passwordLength = prompt("How many characters would you like your password to be?", "type number from 8-120 here");
  const wantsLowerCase = window.confirm("Include lower case letters?");
  const wantsUpperCase = window.confirm("Include upper case letters?");
  const wantsSymbols = window.confirm("Include special characters?");
  const wantsNumbers = window.confirm("Include numbers?");

  // check the confirms
  console.log(passwordLength, wantsLowerCase, wantsUpperCase, wantsNumbers, wantsNumbers)
  


  
  var charset = '';
  var password = '';

  if (wantsLowerCase) {
     charset = charset + lowercaseSet;
  }
  if (wantsUpperCase) {
      charset = charset + uppercaseSet;
  }
  if (wantsSymbols) {
      charset = charset + symbolsSet;
  }
  if (wantsNumbers) {
     charset = charset + numbersSet;
  }

  if (passwordLength < 7) {
    // show alert
    divError.textContent = "Please enter a number from 8 - 128";
    return;
  }

  if (passwordLength > 128) {
    // show alert
    divError.textContent = "Please enter a number from 8 - 120";
    return;
  }

  if (!wantsLowerCase && !wantsUpperCase && !wantsSymbols && !wantsNumbers) {
    // show alert
    divError.textContent = "Please confirm at lease 1 selection";
    return;
  }

  console.log(charset);

  charset = charset.split('')

  for (let index = 0; index < passwordLength; index++) {
      const randomIndex = Math.floor(Math.random() * charset.length);

      const randomChar = charset[randomIndex];

      password += randomChar;
  }
  
return password;

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);






















// Assignment Code


// function generatePassword() {
//   const inputPasswordlength = prompt("How many characters would you like your password to be?", "type number from 8-120 here");
//   const inputPasswordLowerCase = window.confirm("Include lower case letters?");
//   const inputPasswordUpperCase = window.confirm("Include upper case letters?");
//   const InputPasswordSpecialCharc = window.confirm("Include special characters?");
  
  
//   }
//   // Once user has confirmed selections


// })
// }
// generateBtn.addEventListener("click", writePassword);
// function writePassword() {
//   var password = generatePassword();
//   textareaPassword.textContent = password;
// }
//   // When the button is clicked 


//   const passwordLength = Number(inputPasswordLength)


//   let charset = "";

//   // in my password

  

// //then the app will generate a password

// let password = "";


// //loop for each passwordLength times,


// }

// // show password on webpage








// // When the user inputs a number for the length of that password

// inputpasswordLength.addEventListener('input', function (event) {

// });






// var passwordText = document.querySelector("#password");

// passwordText.value = password;







// }

