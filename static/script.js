// Dark Mode Toggle
// This function toggles the website's theme between light and dark modes.
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// JavaScript Variables
// Variables are used to store data in JavaScript. There are three ways to declare variables: `var`, `let`, and `const`.
function showVariablesExample() {
    const outputElement = document.getElementById("variablesOutput");
    if (outputElement.innerText) {
        // If examples are already displayed, clear them
        outputElement.innerText = "";
    } else {
        // Otherwise, display the examples
        const examples = `
1. var:
   var x = 10; // Declares a variable using 'var'. It has function scope.
   console.log(x);

2. let:
   let y = 20; // Declares a variable using 'let'. It has block scope.
   y = 30; // 'let' allows reassignment.
   console.log(y);

3. const:
   const z = 40; // Declares a constant using 'const'. It cannot be reassigned.
   console.log(z);

... (remaining examples)
        `;
        outputElement.innerText = examples;
    }
}

// JavaScript Data Types
function showDataTypesExample() {
    const outputElement = document.getElementById("dataTypesOutput");
    if (outputElement.innerText) {
        outputElement.innerText = "";
    } else {
        const examples = `
1. String:
   let str = "Hello, World!"; // Strings are used to represent text.
   console.log(str);

2. Number:
   let num = 42; // Numbers can be integers or floating-point values.
   console.log(num);

... (remaining examples)
        `;
        outputElement.innerText = examples;
    }
}

// JavaScript Data Structures and Methods
function showDataStructuresExample() {
    const outputElement = document.getElementById("dataStructuresOutput");
    if (outputElement.innerText) {
        outputElement.innerText = "";
    } else {
        const examples = `
1. Arrays:
   let arr = [1, 2, 3]; // Arrays store multiple values in an ordered list.
   console.log(arr);

2. Objects:
   let obj = { key: "value" }; // Objects store key-value pairs.
   console.log(obj);

... (remaining examples)
        `;
        outputElement.innerText = examples;
    }
}

// JavaScript Functions
function showFunctionsExample() {
    const outputElement = document.getElementById("functionsOutput");
    if (outputElement.innerText) {
        outputElement.innerText = "";
    } else {
        const examples = `
1. Regular Function:
   function add(a, b) { // A function that takes two numbers and returns their sum.
       return a + b;
   }
   console.log(add(2, 3)); // Output: 5

... (remaining examples)
        `;
        outputElement.innerText = examples;
    }
}

// JavaScript Operators and Flow Control
function showOperatorsExample() {
    const outputElement = document.getElementById("operatorsOutput");
    if (outputElement.innerText) {
        outputElement.innerText = "";
    } else {
        const examples = `
1. Arithmetic Operators:
   let sum = 5 + 3; // Adds two numbers.
   console.log(sum); // Output: 8

... (remaining examples)
        `;
        outputElement.innerText = examples;
    }
}

// JavaScript Iteration
function showIterationExample() {
    const outputElement = document.getElementById("iterationOutput");
    if (outputElement.innerText) {
        outputElement.innerText = "";
    } else {
        const examples = `
1. for loop:
   for (let i = 0; i < 5; i++) { // Repeats a block of code a fixed number of times.
       console.log(i);
   }

... (remaining examples)
        `;
        outputElement.innerText = examples;
    }
}

// Ternary Expressions and Arrow Functions
function showTernaryArrowExample() {
    const outputElement = document.getElementById("ternaryArrowOutput");
    if (outputElement.innerText) {
        outputElement.innerText = "";
    } else {
        const examples = `
1. Ternary Expression:
   let age = 20;
   let status = age >= 18 ? "Adult" : "Minor"; // Shorthand for if-else.
   console.log(status); // Output: Adult

... (remaining examples)
        `;
        outputElement.innerText = examples;
    }
}