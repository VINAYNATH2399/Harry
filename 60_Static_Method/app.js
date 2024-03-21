
// Example 1

class MathOperations{
 // Static method to add two numbers
    static add(x,y){
        return x+y;
    }
// Static method to multiply two numbers
    static multiply(x,y){
        return x*y;
    }
}
// Calling static methods without creating an instance
const sum = MathOperations.add(5, 3);
console.log(sum);

const product = MathOperations.multiply(4, 6);
console.log(product);


// Example 2

function Mathoperations() {}

// Static method to add two numbers
Mathoperations.add = function(x, y) {
  return x + y;
};

// Static method to multiply two numbers
Mathoperations.multiply = function(x, y) {
  return x * y;
};

// Calling static methods without creating an instance
const sum1 = Mathoperations.add(5, 3);
console.log(sum1); // Output: 8

const product1 = Mathoperations.multiply(4, 6);
console.log(product1); // Output: 24


// Example 3

class StringUtil {
    // Static method to reverse a string
    static reverseString(str) {
      return str.split('').reverse().join('');
    }
  
    // Static method to check if a string is a palindrome
    static isPalindrome(str) {
      const reversedStr = StringUtil.reverseString(str);
      return str === reversedStr;
    }
  
    // Static method to count the number of words in a string
    static countWords(str) {
      const words = str.split(/\s+/).filter(word => word.length > 0);
      return words.length;
    }
  }
  
  // Examples of using static methods
  const originalString = "level";
  const reversedString = StringUtil.reverseString(originalString);
  
  console.log(`Original String: ${originalString}`);
  console.log(`Reversed String: ${reversedString}`);
  console.log(`Is Palindrome: ${StringUtil.isPalindrome(originalString)}`); // Output: true
  
  const sentence = "This is a sample sentence.";
  console.log(`Sentence: ${sentence}`);
  console.log(`Word Count: ${StringUtil.countWords(sentence)}`); // Output: 5
  