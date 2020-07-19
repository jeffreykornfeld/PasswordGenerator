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
        var uppercase = confirm("Do you want uppercase letters?")
        var numbers = confirm("Do you want numbers?")
        var specChar = confirm("Do you want special characters?")

        // generate password 
        var password = generatePassword(uppercase, numbers, specChar);
        var passwordText = document.querySelector("#password");
        
      function generatePassword(uppercase, numbers, specChar) {
        password = "";

        //Values Array
        var values  = { 
          "lowerc": "abcdefghijklmnopqrstuvwxyz",
          "upperc": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          "number": "1234567890",
          "specChars": "!@#$%^&*"}
        
         //if statements for case types - concats the array. 
        let chars = values.lowerc;
        if (uppercase) { chars = chars.concat(values.upperc)}
        if (numbers) { chars = chars.concat(values.number)}
        if (specChar) { chars = chars.concat(values.specChars)}

        for(var i = 0; i < passLength; i++){
        password += chars[Math.floor(Math.random() * chars.length)];
        console.log(password);
      }
      return password;
      }
      }
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
