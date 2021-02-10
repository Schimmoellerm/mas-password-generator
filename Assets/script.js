// Assignment Code
// var generateBtn = document.querySelector("#generate");

let password = document.querySelector("#password")
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialCharacters =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let charPool = ""

function generateBtn () {
  let input = prompt("Select a password length between 8 and 128");
  if (input < 8 || input > 128) {
    alert ("Unacceptable length! Please start over.");
    generateBtn();
  } else {
    console.log(charPool);
    let choiceLower = confirm("Do you want to include lowercase letters?");
      if (choiceLower === true) {
        charPool = charPool + lowercase;
        console.log(charPool);
      }
    let choiceUpper = confirm("Do you want to include uppercase letters?");
      if (choiceUpper === true) {
        charPool = charPool + uppercase;
        console.log(charPool);
      }
    let choiceNumber = confirm("Do you want to include numbers?");
      if (choiceNumber === true) {
        charPool = charPool + numbers;
        console.log(charPool);
      }
    let choiceSpecial = confirm("Do you want to include special characters?");
      if (choiceSpecial === true) {
        charPool = charPool + specialCharacters;
        console.log(charPool);
      }
    if (!choiceLower && !choiceUpper && !choiceNumber && !choiceSpecial) {
      alert ("You must make at least one selection! Please start over.");
      generateBtn();
    }
  }
  charPool = "";
  console.log(charPool);

  password.textContent = "it works!"
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
