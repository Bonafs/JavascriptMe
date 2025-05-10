// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// JavaScript Variables
function showVariablesExample() {
    const example = `
Variables are used to store data in JavaScript. There are three ways to declare variables:
1. var: The old way to declare variables (not recommended anymore).
2. let: Used for variables that can change.
3. const: Used for variables that should not change.

Example:
let age = 25; // A variable that can change
const name = "John"; // A variable that cannot change
var city = "New York"; // Old way of declaring variables
    `;
    document.getElementById("variablesOutput").innerText = example;
}

// JavaScript Data Types
function showDataTypesExample() {
    const example = `
JavaScript has different types of data:
1. String: Text data, e.g., "Hello".
2. Number: Numeric data, e.g., 42.
3. Boolean: True or false values, e.g., true.
4. Object: A collection of key-value pairs, e.g., { name: "John", age: 25 }.
5. Array: A list of values, e.g., [1, 2, 3].
6. Null: An empty value, e.g., null.
7. Undefined: A variable that has been declared but not assigned a value.

Example:
let name = "Alice"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let person = { name: "Alice", age: 30 }; // Object
let numbers = [1, 2, 3]; // Array
let emptyValue = null; // Null
let notAssigned; // Undefined
    `;
    document.getElementById("dataTypesOutput").innerText = example;
}

// JavaScript Data Structures and Methods
function showDataStructuresExample() {
    const example = `
JavaScript has built-in data structures like Arrays and Objects:
1. Arrays: A list of values.
   Methods: push(), pop(), shift(), unshift(), map(), filter(), reduce().
2. Objects: A collection of key-value pairs.
   Methods: Object.keys(), Object.values(), Object.entries().

Example:
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange"); // Adds "orange" to the end of the array
console.log(fruits);

let person = { name: "Alice", age: 30 };
console.log(Object.keys(person)); // ["name", "age"]
    `;
    document.getElementById("dataStructuresOutput").innerText = example;
}

// JavaScript Functions
function showFunctionsExample() {
    const example = `
Functions are blocks of code that perform a specific task. They can take inputs (parameters) and return outputs.

Example:
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // "Hello, Alice!"
    `;
    document.getElementById("functionsOutput").innerText = example;
}

// JavaScript Operators and Flow Control
function showOperatorsExample() {
    const example = `
Operators are symbols used to perform operations:
1. Arithmetic Operators: +, -, *, /, %.
2. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=.
3. Logical Operators: && (AND), || (OR), ! (NOT).

Flow control determines the order in which code runs:
1. if-else: Executes code based on a condition.
2. switch: Executes code based on multiple conditions.

Example:
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
    `;
    document.getElementById("operatorsOutput").innerText = example;
}

// JavaScript Iteration
function showIterationExample() {
    const example = `
Iteration means repeating a block of code. JavaScript has several ways to iterate:
1. for loop: Repeats a block of code a fixed number of times.
2. while loop: Repeats a block of code while a condition is true.
3. forEach: Iterates over an array.

Example:
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num)); // Prints 1, 2, 3
    `;
    document.getElementById("iterationOutput").innerText = example;
}

// JavaScript Ternary Expressions and Arrow Functions
function showTernaryArrowExample() {
    const example = `
1. Ternary Expressions: A shorthand for if-else.
   Syntax: condition ? valueIfTrue : valueIfFalse.

Example:
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

2. Arrow Functions: A shorthand for writing functions.
   Syntax: (parameters) => { code }

Example:
let add = (a, b) => a + b;
console.log(add(2, 3)); // 5
    `;
    document.getElementById("ternaryArrowOutput").innerText = example;
}

// JavaScript Data Types and Methods
function showDataTypesExample() {
    const examples = `
1. String:
   let greeting = "Hello, World!";
   console.log(greeting.toUpperCase()); // HELLO, WORLD!

2. Number:
   let num = 42;
   console.log(num.toFixed(2)); // 42.00

3. Boolean:
   let isJavaScriptFun = true;
   console.log(isJavaScriptFun ? "Yes, it is!" : "No, it's not."); // Yes, it is!

4. Object:
   let person = { name: "Alice", age: 30 };
   console.log(Object.keys(person)); // ["name", "age"]

5. Array:
   let fruits = ["apple", "banana", "cherry"];
   fruits.push("orange");
   console.log(fruits); // ["apple", "banana", "cherry", "orange"]
    `;
    document.getElementById("dataTypesOutput").innerText = examples;
}

// JavaScript Data Structures and Methods
function showDataStructuresExample() {
    const examples = `
1. Arrays:
   let numbers = [1, 2, 3, 4, 5];
   let doubled = numbers.map(num => num * 2);
   console.log(doubled); // [2, 4, 6, 8, 10]

2. Objects:
   let car = { brand: "Toyota", model: "Corolla", year: 2020 };
   console.log(Object.values(car)); // ["Toyota", "Corolla", 2020]

3. Nested Structures:
   let library = [
       { title: "Book A", author: "Author A" },
       { title: "Book B", author: "Author B" }
   ];
   library.forEach(book => console.log(book.title));

4. Sets:
   let uniqueNumbers = new Set([1, 2, 2, 3]);
   console.log(uniqueNumbers); // Set { 1, 2, 3 }

5. Maps:
   let userRoles = new Map();
   userRoles.set("Alice", "Admin");
   userRoles.set("Bob", "User");
   console.log(userRoles.get("Alice")); // Admin
    `;
    document.getElementById("dataStructuresOutput").innerText = examples;
}

// JavaScript Functions
function showFunctionsExample() {
    const examples = `
1. Regular Function:
   function add(a, b) {
       return a + b;
   }
   console.log(add(2, 3)); // 5

2. Arrow Function:
   let multiply = (a, b) => a * b;
   console.log(multiply(2, 3)); // 6

3. Function with Default Parameters:
   function greet(name = "Guest") {
       return "Hello, " + name;
   }
   console.log(greet()); // Hello, Guest

4. Higher-Order Function:
   let numbers = [1, 2, 3];
   let squared = numbers.map(num => num ** 2);
   console.log(squared); // [1, 4, 9]

5. Recursive Function:
   function factorial(n) {
       return n === 0 ? 1 : n * factorial(n - 1);
   }
   console.log(factorial(5)); // 120
    `;
    document.getElementById("functionsOutput").innerText = examples;
}

// JavaScript Operators and Flow Control
function showOperatorsExample() {
    const examples = `
1. Arithmetic Operators:
   let sum = 5 + 3;
   console.log(sum); // 8

2. Comparison Operators:
   console.log(5 > 3); // true

3. Logical Operators:
   console.log(true && false); // false

4. if-else:
   let age = 18;
   if (age >= 18) {
       console.log("Adult");
   } else {
       console.log("Minor");
   }

5. switch:
   let day = "Monday";
   switch (day) {
       case "Monday":
           console.log("Start of the week");
           break;
       default:
           console.log("Another day");
   }
    `;
    document.getElementById("operatorsOutput").innerText = examples;
}

// JavaScript Iteration
function showIterationExample() {
    const examples = `
1. for loop:
   for (let i = 0; i < 5; i++) {
       console.log(i);
   }

2. while loop:
   let count = 0;
   while (count < 3) {
       console.log(count);
       count++;
   }

3. do-while loop:
   let num = 0;
   do {
       console.log(num);
       num++;
   } while (num < 3);

4. forEach:
   let fruits = ["apple", "banana", "cherry"];
   fruits.forEach(fruit => console.log(fruit));

5. for...of:
   for (let char of "JavaScript") {
       console.log(char);
   }
    `;
    document.getElementById("iterationOutput").innerText = examples;
}

// Ternary Expressions and Arrow Functions
function showTernaryArrowExample() {
    const examples = `
1. Ternary Expression:
   let age = 20;
   let status = age >= 18 ? "Adult" : "Minor";
   console.log(status); // Adult

2. Arrow Function:
   let square = x => x ** 2;
   console.log(square(4)); // 16

3. Combining Both:
   let isEven = num => num % 2 === 0 ? "Even" : "Odd";
   console.log(isEven(3)); // Odd
    `;
    document.getElementById("ternaryArrowOutput").innerText = examples;
}