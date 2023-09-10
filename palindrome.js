
// Create a function that tests if a string is a pallindrome.

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

something(palindrome);
something(nonPalindrome);