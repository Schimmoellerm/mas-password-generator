// Assignment Code

let password = document.querySelector("#password")
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialCharacters =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let charPool = "";
let finalPassword = [];

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
  for (i = 0; i < input.length; i++) {
    let Choices = charPool[Math.floor(Math.random() * charPool.length)];
    finalPassword.push(Choices);
  }
  finalPassword.join;

  charPool = "";
  console.log(charPool);
  console.log(finalPassword);

  password.textContent = finalPassword;
//.fromCharCode to pull key binding information from UTF-8
}
