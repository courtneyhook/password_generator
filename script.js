// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var myPassword = 123456789;
  var testPassword = [];
  var passwordCharacterList = [];
  var lowercaseList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var uppercaseList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialList = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "<",
    ">",
    "?",
    "/",
  ];
  var numberOfCharacters = prompt(
    "How many characters would you like your password to contain?"
  );
  if (numberOfCharacters < 8) {
    alert("Your password must contain 8 or more characters.");
    return;
  }
  if (numberOfCharacters > 129) {
    alert("Your password must contain less than 130 characters.");
    return;
  }

  var includeLowercase = confirm(
    "Would you like your password to contain lowercase letters?"
  );
  if (includeLowercase) {
    passwordCharacterList = passwordCharacterList.concat(lowercaseList);
  }

  var includeUppercase = confirm(
    "Would you like your password to contain uppercase letters?"
  );
  if (includeUppercase) {
    passwordCharacterList = passwordCharacterList.concat(uppercaseList);
  }

  var includeNumbers = confirm(
    "Would you like your password to contain numbers?"
  );
  if (includeNumbers) {
    passwordCharacterList = passwordCharacterList.concat(numberList);
  }

  var includeSpecial = confirm(
    "Would you like your password to contain special characters?"
  );
  if (includeSpecial) {
    passwordCharacterList = passwordCharacterList.concat(specialList);
  }

  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSpecial
  ) {
    alert("You must choose at least one type of character.");
    return;
  }

  console.log(numberOfCharacters);
  function makeMyPassword() {
    testPassword.length = 0;
    for (a = 0; a < numberOfCharacters; a++) {
      var randomIndex = Math.floor(
        Math.random() * passwordCharacterList.length
      );
      testPassword = testPassword.concat(passwordCharacterList[randomIndex]);
    }
    checkMyPassword(testPassword);
  }

  function checkMyPassword(testPassword) {
    var checked = function (testPassword, array1) {
      if (array1) {
        for (a = 0; a < testPassword.length; a++) {
          for (b = 0; b < array1.length; b++) {
            if (testPassword[a] === array1[b]) {
              return true;
            }
          }
        }
      }
    };

    if (includeLowercase) {
      if (checked(testPassword, lowercaseList)) {
        console.log("pass");
      } else {
        makeMyPassword();
      }
    }

    if (includeUppercase) {
      if (checked(testPassword, uppercaseList)) {
        console.log("pass");
      } else {
        makeMyPassword();
      }
    }

    if (includeNumbers) {
      if (checked(testPassword, numberList)) {
        console.log("pass");
      } else {
        makeMyPassword();
      }
    }
    if (includeSpecial) {
      if (checked(testPassword, specialList)) {
        console.log("pass");
      } else {
        makeMyPassword();
      }
    }

    return testPassword;
  }
  makeMyPassword(numberOfCharacters, passwordCharacterList);
  console.log(testPassword);
  myPassword = testPassword.join("");
  return myPassword;
}
//Prompt user for the number of characters in their password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
