// Chapter 35 to 38

// Question 1 

// function showDateTime() {
//   var dateAndTime = new Date()
//   document.writeln(dateAndTime)
// }

// showDateTime()

// Question 2

// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName 
//     alert("Welcome" + " " + fullName + "!")
// }

// greetUser("Ali" , "Raza")

// Question 3


// function addNumbers(a, b) {
//   return a + b;
// }

// var num1 = +prompt("Enter first number:")
// var num2 = +prompt("Enter second number:")

// var sum = addNumbers(num1, num2);

// alert("The sum of " + num1 + " and " + num2 + " is " + sum);

// Question 4


// function calculate(num1, num2, operator) {
//   var result

//   if (operator === "+") {
//     result = num1 + num2;
//   } else if (operator === "-") {
//     result = num1 - num2;
//   } else if (operator === "*") {
//     result = num1 * num2;
//   } else if (operator === "/") {
//     result = num1 / num2;
//   } else {
//     result = "Invalid operator"
//   }

//   return result;
// }


// var firstNumber = +prompt("Enter first number:")
// var secondNumber = +prompt("Enter second number:")
// var mathOperation = prompt("Enter operator (+, -, *, /):")

// var answer = calculate(firstNumber, secondNumber, mathOperation)

// document.writeln("Result: " + answer)

// Question 5

// function square(num){
//   return num * num
// }

// var result = square(5)

// console.log(result)

// // Q6 
// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }
// var factNum = +prompt("Enter a number for factorial:");
// document.writeln("Factorial: " + factorial(factNum) + "<br>");

// // Q7 
// function counting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.writeln(i + " ");
//     }
//     document.writeln("<br>");
// }
// var startNum = +prompt("Enter start number:");
// var endNum = +prompt("Enter end number:");
// counting(startNum, endNum);

// // Q8 
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(x) {
//         return x * x;
//     }
//     return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
// }
// var base = +prompt("Enter base:");
// var perp = +prompt("Enter perpendicular:");
// document.writeln("Hypotenuse: " + calculateHypotenuse(base, perp) + "<br>");

// // Q9 
// function areaRectangle(width, height) {
//     return width * height;
// }
// document.writeln("Area (Values): " + areaRectangle(5, 10) + "<br>");
// var w = 7, h = 4;
// document.writeln("Area (Variables): " + areaRectangle(w, h) + "<br>");

// // Q10 
// function isPalindrome(str) {
//     var reversed = str.split("").reverse().join("");
//     return str === reversed;
// }
// var word = prompt("Enter a word to check palindrome:");
// document.writeln(word + " is palindrome? " + isPalindrome(word) + "<br>");

// // Q11 
// function capitalizeWords(str) {
//     return str.replace(/\b\w/g, function(l) { return l.toUpperCase(); });
// }
// var sentence = prompt("Enter a sentence:");
// document.writeln("Capitalized: " + capitalizeWords(sentence) + "<br>");

// // Q12 
// function findLongestWord(str) {
//     var words = str.split(" ");
//     var longest = "";
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }
//     return longest;
// }
// var inputStr = prompt("Enter a string:");
// document.writeln("Longest Word: " + findLongestWord(inputStr) + "<br>");

// // Q13 
// function countOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === letter.toLowerCase()) {
//             count++;
//         }
//     }
//     return count;
// }
// var text = prompt("Enter a string:");
// var letter = prompt("Enter a letter to count:");
// document.writeln("Occurrences of '" + letter + "': " + countOccurrences(text, letter) + "<br>");

// // Q14 
// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.writeln("The circumference is " + circumference.toFixed(2) + "<br>");
// }
// function calcArea(radius) {
//     var area = Math.PI * radius * radius;
//     document.writeln("The area is " + area.toFixed(2) + "<br>");
// }
// var r = +prompt("Enter radius:");
// calcCircumference(r);
// calcArea(r);

