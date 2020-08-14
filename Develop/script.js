var generateBtn = document.querySelector("#generate");
var passwordUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var passwordLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var passwordSymbol = ["!","#","$","%","&","+","="]
var passwordNumber = ["1","2","3","4","5","6","7","8","9","1","0"]



generateBtn.addEventListener("click", writePassword);



function generatePassword(){

  
  passwordLength = parseInt(prompt ("Password must be at least 8 characters and no more than 128 characters."))
  console.log(passwordLength);

  passwordUpper= confirm("Would you like to use uppercase letters?");
  passwordLower= confirm( "Would you like to use lowercase letters?");
  passwordSymbol = confirm("Woudl you like to use special characters?");
  passwordNumber= confirm("Would you like to use numbers?");
  
  passwordCreation = "";
  passwordLength = parseInt (passwordLength);
  console.log("passwordLength2:", passwordLength);
  console.log(typeof passwordLength)
  if (passwordLength < 8 || passwordLength > 128){
    alert ("Please choose a category");
    passwordLength = prompt("Password must be at least 8 characters and no more than 128 characters.");
  }



  function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
     }
     console.log("getRandomUpper:", getRandomUpper);

  function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
     }
     console.log("getRandomLower:", getRandomLower);

  function getRandomNumber(){
   return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
     }

  function getRandomSymbol(){
    var symbols= "!#$%&+=";
   return symbols[Math.floor(Math.random() * symbols.length)];
 }
  function getRandomCharacter(){
  var totalChoices= passwordCharacters.length
  var randomIndex= Math.floor(Math.random()* totalChoices)
  var randomChar= passwordCharacters[randomIndex]
  return randomChar
    
  }
  var all = uppercase + lowercase + numbers + symbols;

  var password = '';

  for (var index = 0; index < length; index++) {
      var character = Math.floor(Math.random() * all.length);
      password += all.substring(character, character + 1);
  }
    
  return password
    }

    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
    }

  