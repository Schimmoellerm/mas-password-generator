// Assignment Code

let password = document.querySelector("#password")
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialCharacters =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let charPool = "";
let finalPassword = "";
let input;
let counter = 0;

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
        counter++;
        finalPassword = finalPassword + lowercase[Math.floor(Math.random() * lowercase.length)];
        console.log(finalPassword);
      }
    let choiceUpper = confirm("Do you want to include uppercase letters?");
      if (choiceUpper === true) {
        charPool = charPool + uppercase;
        console.log(charPool);
        counter++;
        finalPassword = finalPassword + uppercase[Math.floor(Math.random() * uppercase.length)];
        console.log(finalPassword);
      }
    let choiceNumber = confirm("Do you want to include numbers?");
      if (choiceNumber === true) {
        charPool = charPool + numbers;
        console.log(charPool);
        counter++;
        finalPassword = finalPassword + numbers[Math.floor(Math.random() * numbers.length)];
        console.log(finalPassword);
      }
    let choiceSpecial = confirm("Do you want to include special characters?");
      if (choiceSpecial === true) {
        charPool = charPool + specialCharacters;
        console.log(charPool);
        counter++;
        finalPassword = finalPassword + specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        console.log(finalPassword);
      }
    if (!choiceLower && !choiceUpper && !choiceNumber && !choiceSpecial) {
      alert ("You must make at least one selection! Please start over.");
      counter = 0;
      generateBtn();
    }
  }
  for (i = 0; i < input - counter; i++) {
    let Choices = charPool[Math.floor(Math.random() * charPool.length)];
    finalPassword = finalPassword + Choices;
  }
  console.log(finalPassword);
  password.textContent = finalPassword;
  charPool = "";
  finalPassword = "";
  counter = 0;
  console.log(charPool);
  console.log(finalPassword);

 
//.fromCharCode to pull key binding information from UTF-8
}
