// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// JavaScript Variables
function showVariablesExample() {
    const examples = `
1. var: Old way to declare variables.
2. let: Modern way to declare variables that can change.
3. const: Declare variables that cannot change.

Example:
let age = 25;
const name = "John";
var city = "New York";
    `;
    document.getElementById("variablesOutput").innerText = examples;
}

// JavaScript Data Types
function showDataTypesExample() {
    const examples = `
1. String: Text data, e.g., "Hello".
2. Number: Numeric data, e.g., 42.
3. Boolean: True or false values, e.g., true.
4. Object: Key-value pairs, e.g., { name: "Alice", age: 30 }.
5. Array: List of values, e.g., [1, 2, 3].
    `;
    document.getElementById("dataTypesOutput").innerText = examples;
}

// JavaScript Data Structures and Methods
function showDataStructuresExample() {
    const examples = `
1. Arrays: List of values.
2. Objects: Key-value pairs.
3. Methods: push(), pop(), map(), filter(), reduce().
    `;
    document.getElementById("dataStructuresOutput").innerText = examples;
}

// JavaScript Functions
function showFunctionsExample() {
    const examples = `
1. Functions: Reusable blocks of code.
2. Arrow Functions: Shorter syntax for functions.
    `;
    document.getElementById("functionsOutput").innerText = examples;
}

// JavaScript Operators and Flow Control
function showOperatorsExample() {
    const examples = `
1. Arithmetic Operators: +, -, *, /.
2. Comparison Operators: ==, ===, !=, !==.
3. Logical Operators: &&, ||, !.
    `;
    document.getElementById("operatorsOutput").innerText = examples;
}

// JavaScript Iteration
function showIterationExample() {
    const examples = `
1. for loop: Repeat a block of code.
2. while loop: Repeat while a condition is true.
3. forEach: Iterate over an array.
    `;
    document.getElementById("iterationOutput").innerText = examples;
}

// Ternary Expressions and Arrow Functions
function showTernaryArrowExample() {
    const examples = `
1. Ternary Expressions: Shorthand for if-else.
2. Arrow Functions: Shorter syntax for functions.
    `;
    document.getElementById("ternaryArrowOutput").innerText = examples;
}