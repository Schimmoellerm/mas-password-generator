// Assignment Code
// var generateBtn = document.querySelector("#generate");

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialCharacters =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let charPool = ""

function generateBtn () {
  let input = prompt("Select a password length between 8 and 128");

  //Need if statement that will check if the 
  //if (input < 8);
   // alert ("password length is too short");
   // generateBtn;
//} else if (input > 128); {
    //alert ("password is to long");
    //generateBtn;
//}

  let choiceLower = confirm("Do you want to include lowercase letters?");
//Need if statement for including lowers
  let choiceUpper = confirm("Do you want to include uppercase letters?");
//Need if statement for including uppers
  let choiceNumber = confirm("Do you want to include numbers?");
//Need if statement for including numbers
  let choiceSpecial = confirm("Do you want to include special characters?");
//Need if statement for including specials

//.fromCharCode to pull key binding information from UTF-8
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
