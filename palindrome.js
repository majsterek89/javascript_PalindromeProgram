
// Create a function that tests if a string is a pallindrome.

/*
-Added 'input', 'div', 'button' selectors and created event 'onclik()' to enter value
-Created function 'getValueInput' which get id of two selectors and their value

*/

function getValueInput()
{
let inputText = document.getElementById("inputText");
let outputText = document.getElementById("outputText");

console.log(inputText.value);
console.log(outputText.innerText);
something(inputText.value);
}
// If you can't think of any strings, try these out:
let palindrome = "Was it a cat I saw"
let nonPalindrome = "Hey how are you"

// Type your code here:
function something(x) {
  let string1= x.toLowerCase().split(' ').join('');
  console.log(string1);

  let string2 = string1.split('').reverse().join('');

  console.log(string2);
  return console.log(string1===string2);
}

//console.log(inputText.value);

//something(nonPalindrome);