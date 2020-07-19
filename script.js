// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
 
  //Password Length
  var passLength = prompt("How many characters?")
      if (passLength < 8 || passLength > 128){
        alert("Please enter a number between 8 & 128")
      }
      else {

        //Choose case types
        //var uppercase = confirm("Do you want uppercase letters?")
        //var lowercase = confirm("Do you want lowercase letters?")
        //var numbers = confirm("Do you want numbers?")
        //var specChar = confirm("Do you want special characters?")

        // generate password 
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        
      function generatePassword() {
        password = "";
        var values = "abcdefghijklmnopqrstuvwxyz"  
        for(var i = 0; i < passLength; i++){
        password += values[Math.floor(Math.random() * values.length)];
        console.log(password);
      }
      return password;
      }
      }
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
