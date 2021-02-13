//Variables used in the code
let password = document.querySelector("#password")//ties output of password generated to the html document and outputs it at id = "password"
let lowercase = "abcdefghijklmnopqrstuvwxyz"; 
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialCharacters =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let charPool = ""; //This is the variable that builds into the final character pool that the password pulls from.
let finalPassword = ""; //This is the variable used for the final password output. This is added to throughout the function.
let counter = 0; // Counter is used to subtract numbers from the input. this is part of ensuring that each choice will include at least one character from the final password.

//This function is tied to the id = "generate" in the HTML code. On click it will run the function generatinga password based on user specifications. 
function generateBtn () {
  let input = prompt("Select a password length between 8 and 128");
  //if (input === null || input === undefined) return; //exits the function without restart if the user clicks cancel
  if (input < 8 || input > 128) {
    alert ("Unacceptable length! Please start over.");
    generateBtn(); //resets user inputs until correct //resets function to start over 
  } else {//allows users to choose lowercase letter in their password
    let choiceLower = confirm("Do you want to include lowercase letters?");
      if (choiceLower === true) {
        charPool = charPool + lowercase;
        counter++;
        finalPassword = finalPassword + lowercase[Math.floor(Math.random() * lowercase.length)];
      }
    let choiceUpper = confirm("Do you want to include uppercase letters?"); //allows users to choose uppercase letter in their password
      if (choiceUpper === true) {
        charPool = charPool + uppercase;
        counter++;
        finalPassword = finalPassword + uppercase[Math.floor(Math.random() * uppercase.length)];
      }
    let choiceNumber = confirm("Do you want to include numbers?");  //allows users to choose numbers in their password
      if (choiceNumber === true) {
        charPool = charPool + numbers;
        counter++;
        finalPassword = finalPassword + numbers[Math.floor(Math.random() * numbers.length)];
      }
    let choiceSpecial = confirm("Do you want to include special characters?"); //allows users to special characters  in their password
      if (choiceSpecial === true) {
        charPool = charPool + specialCharacters;
        counter++;
        finalPassword = finalPassword + specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      }
    if (!choiceLower && !choiceUpper && !choiceNumber && !choiceSpecial) { //
      alert ("You must make at least one selection! Please start over.");
      counter = 0;
      //if (input === null || input === undefined) return;
      generateBtn();
    }
  }
  if (input < 8 || input > 128) return; 
  for (i = 0; i < input - counter; i++) { //randomizes choices from the charPool to finish out pasword
    let Choices = charPool[Math.floor(Math.random() * charPool.length)];
    finalPassword = finalPassword + Choices;
  }
  //outputs password to "your secure password" section of html doc
  password.textContent = finalPassword;
  //resets variables for next password input
  charPool = "";
  finalPassword = "";
  counter = 0;
}
 

