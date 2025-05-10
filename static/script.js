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

3. const:
   const z = 40; // Declares a constant using 'const'. It cannot be reassigned.
   console.log(z);

4. Block Scope:
   {
       let a = 50; // 'let' is only accessible within this block.
       console.log(a);
   }

5. Global Scope:
   var globalVar = "I am global"; // 'var' can be accessed globally if declared outside a function.
   console.log(globalVar);

6. Hoisting with var:
   console.log(hoistedVar); // 'var' variables are hoisted but initialized as undefined.
   var hoistedVar = "Hoisted";

7. No Hoisting with let:
   // console.log(notHoisted); // Error: 'let' variables are not hoisted.
   let notHoisted = "Not Hoisted";

8. Reassignment:
   let reassignable = 100; // 'let' allows reassignment.
   reassignable = 200;
   console.log(reassignable);

9. Constants:
   const constantValue = 300; // 'const' variables cannot be reassigned.
   // constantValue = 400; // Error: Assignment to constant variable.

10. Template Literals:
   let name = "Alice"; // Template literals allow embedding variables in strings.
   console.log(\`Hello, \${name}!\`);

11. Dynamic Typing:
   let dynamic = 42; // JavaScript variables can change types dynamically.
   dynamic = "Now I'm a string";
   console.log(dynamic);

12. Undefined:
   let undefinedVar; // A variable declared but not assigned a value is 'undefined'.
   console.log(undefinedVar);

13. Null:
   let nullVar = null; // 'null' represents an intentional absence of value.
   console.log(nullVar);

14. Arrays:
   let arr = [1, 2, 3]; // Arrays are used to store multiple values.
   console.log(arr);

15. Objects:
   let obj = { key: "value" }; // Objects store key-value pairs.
   console.log(obj);

16. Functions as Variables:
   let greet = function() { // Functions can be assigned to variables.
       return "Hello!";
   };
   console.log(greet());

17. Arrow Functions:
   let arrowGreet = () => "Hello, Arrow!"; // Arrow functions are a shorthand for writing functions.
   console.log(arrowGreet());

18. Boolean Variables:
   let isTrue = true; // Boolean variables store true or false values.
   console.log(isTrue);

19. Numbers:
   let num = 123; // Numbers can be integers or floating-point values.
   console.log(num);

20. Strings:
   let str = "JavaScript"; // Strings are sequences of characters.
   console.log(str);
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

3. Boolean:
   let isTrue = true; // Booleans represent true or false values.
   console.log(isTrue);

4. Object:
   let obj = { name: "Alice", age: 30 }; // Objects store key-value pairs.
   console.log(obj);

5. Array:
   let arr = [1, 2, 3]; // Arrays store multiple values in an ordered list.
   console.log(arr);

6. Null:
   let nullValue = null; // 'null' represents an intentional absence of value.
   console.log(nullValue);

7. Undefined:
   let undefinedValue; // A variable declared but not assigned a value is 'undefined'.
   console.log(undefinedValue);

8. BigInt:
   let bigIntValue = 123456789012345678901234567890n; // BigInt is used for very large integers.
   console.log(bigIntValue);

9. Symbol:
   let sym = Symbol("unique"); // Symbols are unique and immutable identifiers.
   console.log(sym);

10. typeof Operator:
   console.log(typeof str); // 'typeof' returns the data type of a variable.

11. String Methods:
   console.log(str.toUpperCase()); // Converts a string to uppercase.

12. Array Methods:
   console.log(arr.map(x => x * 2)); // Applies a function to each array element.

13. Object Methods:
   console.log(Object.keys(obj)); // Returns an array of object keys.

14. Boolean Logic:
   console.log(!isTrue); // Negates a boolean value.

15. Number Methods:
   console.log(num.toFixed(2)); // Formats a number to 2 decimal places.

16. Template Literals:
   console.log(\`Hello, \${obj.name}!\`); // Embeds variables in strings.

17. Nested Objects:
   let nestedObj = { person: { name: "Bob", age: 25 } }; // Objects can be nested.
   console.log(nestedObj.person.name);

18. Nested Arrays:
   let nestedArr = [[1, 2], [3, 4]]; // Arrays can be nested.
   console.log(nestedArr[0][1]);

19. Combining Types:
   let mixed = [1, "two", { three: 3 }]; // Arrays can store mixed data types.
   console.log(mixed);

20. Dynamic Typing:
   let dynamic = "string"; // Variables can change types dynamically.
   dynamic = 123;
   console.log(dynamic);
   
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

3. Sets:
   let set = new Set([1, 2, 2, 3]); // Sets store unique values.
   console.log(set);

4. Maps:
   let map = new Map(); // Maps store key-value pairs with any data type as keys.
   map.set("key", "value");
   console.log(map);

5. Nested Structures:
   let nested = { arr: [1, 2, 3], obj: { key: "value" } }; // Data structures can be nested.
   console.log(nested);

6. Array Methods:
   console.log(arr.map(x => x * 2)); // Applies a function to each array element.

7. Object Methods:
   console.log(Object.keys(obj)); // Returns an array of object keys.

8. Set Methods:
   set.add(4); // Adds a value to the set.
   console.log(set);

9. Map Methods:
   map.set("newKey", "newValue"); // Adds a key-value pair to the map.
   console.log(map);

10. Combining Structures:
   let combined = [obj, set, map]; // Data structures can be combined.
   console.log(combined);

11. Array Iteration:
   arr.forEach(x => console.log(x)); // Iterates over array elements.

12. Object Iteration:
   for (let key in obj) { // Iterates over object keys.
       console.log(key, obj[key]);
   }

13. Set Iteration:
   for (let value of set) { // Iterates over set values.
       console.log(value);
   }

14. Map Iteration:
   for (let [key, value] of map) { // Iterates over map key-value pairs.
       console.log(key, value);
   }

15. Array Filtering:
   console.log(arr.filter(x => x > 1)); // Filters array elements based on a condition.

16. Array Reducing:
   console.log(arr.reduce((sum, x) => sum + x, 0)); // Reduces array elements to a single value.

17. Object Destructuring:
   let { key } = obj; // Extracts object properties into variables.
   console.log(key);

18. Array Destructuring:
   let [first, second] = arr; // Extracts array elements into variables.
   console.log(first, second);

19. Spread Operator:
   let newArr = [...arr, 4]; // Expands an array into individual elements.
   console.log(newArr);

20. Rest Operator:
   function sum(...nums) { // Collects arguments into an array.
       return nums.reduce((sum, x) => sum + x, 0);
   }
   console.log(sum(1, 2, 3));

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

2. Arrow Function:
   let multiply = (a, b) => a * b; // A shorter syntax for writing functions.
   console.log(multiply(2, 3)); // Output: 6

3. Function with Default Parameters:
   function greet(name = "Guest") { // A function with a default parameter.
       return "Hello, " + name;
   }
   console.log(greet()); // Output: Hello, Guest

4. Higher-Order Function:
   let numbers = [1, 2, 3];
   let squared = numbers.map(num => num ** 2); // A function that takes another function as an argument.
   console.log(squared); // Output: [1, 4, 9]

5. Recursive Function:
   function factorial(n) { // A function that calls itself to calculate the factorial of a number.
       return n === 0 ? 1 : n * factorial(n - 1);
   }
   console.log(factorial(5)); // Output: 120

6. Anonymous Function:
   let greet = function() { // A function without a name, assigned to a variable.
       return "Hello!";
   };
   console.log(greet()); // Output: Hello!

7. Immediately Invoked Function Expression (IIFE):
   (function() { // A function that runs immediately after being defined.
       console.log("IIFE executed!");
   })();

8. Function Returning a Function:
   function outer() { // A function that returns another function.
       return function inner() {
           return "Hello from inner!";
       };
   }
   console.log(outer()()); // Output: Hello from inner!

9. Function with Rest Parameters:
   function sum(...nums) { // A function that takes a variable number of arguments.
       return nums.reduce((total, num) => total + num, 0);
   }
   console.log(sum(1, 2, 3, 4)); // Output: 10

10. Function with Spread Operator:
   function multiply(a, b, c) { // A function that multiplies three numbers.
       return a * b * c;
   }
   let nums = [2, 3, 4];
   console.log(multiply(...nums)); // Output: 24

11. Callback Function:
   function processArray(arr, callback) { // A function that takes another function as an argument.
       return arr.map(callback);
   }
   console.log(processArray([1, 2, 3], num => num * 2)); // Output: [2, 4, 6]

12. Function with Destructuring:
   function display({ name, age }) { // A function that extracts properties from an object.
       console.log(\`Name: \${name}, Age: \${age}\`);
   }
   display({ name: "Alice", age: 30 });

13. Function with Default Object Parameter:
   function displayUser(user = { name: "Guest", age: 0 }) { // A function with a default object parameter.
       console.log(\`Name: \${user.name}, Age: \${user.age}\`);
   }
   displayUser();

14. Function with Template Literals:
   function greet(name) { // A function that uses template literals.
       return \`Hello, \${name}!\`;
   }
   console.log(greet("Alice"));

15. Function with Conditional Logic:
   function checkAge(age) { // A function that uses conditional logic.
       return age >= 18 ? "Adult" : "Minor";
   }
   console.log(checkAge(20)); // Output: Adult

16. Function with Array Methods:
   function doubleArray(arr) { // A function that doubles each element in an array.
       return arr.map(num => num * 2);
   }
   console.log(doubleArray([1, 2, 3])); // Output: [2, 4, 6]

17. Function with Object Methods:
   function getKeys(obj) { // A function that returns the keys of an object.
       return Object.keys(obj);
   }
   console.log(getKeys({ name: "Alice", age: 30 })); // Output: ["name", "age"]

18. Function with Nested Functions:
   function outer() { // A function that contains another function.
       function inner() {
           return "Inner Function";
       }
       return inner();
   }
   console.log(outer()); // Output: Inner Function

19. Function with Try-Catch:
   function safeDivide(a, b) { // A function that handles errors using try-catch.
       try {
           if (b === 0) throw "Division by zero!";
           return a / b;
       } catch (error) {
           return error;
       }
   }
   console.log(safeDivide(10, 0)); // Output: Division by zero!

20. Function with Loops:
   function sumArray(arr) { // A function that sums all elements in an array using a loop.
       let sum = 0;
       for (let num of arr) {
           sum += num;
       }
       return sum;
   }
   console.log(sumArray([1, 2, 3])); // Output: 6
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

2. Subtraction:
   let difference = 10 - 4; // Subtracts one number from another.
   console.log(difference); // Output: 6

3. Multiplication:
   let product = 4 * 3; // Multiplies two numbers.
   console.log(product); // Output: 12

4. Division:
   let quotient = 12 / 4; // Divides one number by another.
   console.log(quotient); // Output: 3

5. Modulus:
   let remainder = 10 % 3; // Returns the remainder of a division.
   console.log(remainder); // Output: 1

6. Comparison Operators:
   console.log(5 > 3); // Checks if 5 is greater than 3. Output: true

7. Logical AND:
   console.log(true && false); // Checks if both conditions are true. Output: false

8. Logical OR:
   console.log(true || false); // Checks if at least one condition is true. Output: true

9. Logical NOT:
   console.log(!true); // Negates a boolean value. Output: false

10. Assignment Operators:
   let x = 10; // Assigns a value to a variable.
   x += 5; // Adds 5 to the current value of x.
   console.log(x); // Output: 15

11. Ternary Operator:
   let age = 18;
   let status = age >= 18 ? "Adult" : "Minor"; // A shorthand for if-else.
   console.log(status); // Output: Adult

12. typeof Operator:
   console.log(typeof "Hello"); // Returns the data type of a variable. Output: string

13. instanceof Operator:
   console.log([] instanceof Array); // Checks if an object is an instance of a specific class. Output: true

14. Nullish Coalescing Operator:
   let value = null ?? "Default"; // Returns the right-hand value if the left-hand value is null or undefined.
   console.log(value); // Output: Default

15. Optional Chaining:
   let user = { name: "Alice" };
   console.log(user?.address?.city); // Safely accesses nested properties. Output: undefined

16. Bitwise AND:
   console.log(5 & 1); // Performs a bitwise AND operation. Output: 1

17. Bitwise OR:
   console.log(5 | 1); // Performs a bitwise OR operation. Output: 5

18. Increment Operator:
   let count = 0;
   count++;
   console.log(count); // Output: 1

19. Decrement Operator:
   let countDown = 5;
   countDown--;
   console.log(countDown); // Output: 4

20. Short-Circuit Evaluation:
   console.log(false || "Default"); // Returns the second value if the first is falsy. Output: Default
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

2. while loop:
   let count = 0;
   while (count < 3) { // Repeats a block of code while a condition is true.
       console.log(count);
       count++;
   }

3. do-while loop:
   let num = 0;
   do { // Executes the block of code at least once, then checks the condition.
       console.log(num);
       num++;
   } while (num < 3);

4. forEach:
   let fruits = ["apple", "banana", "cherry"];
   fruits.forEach(fruit => console.log(fruit)); // Iterates over each element in an array.

5. for...of:
   for (let char of "JavaScript") { // Iterates over each character in a string.
       console.log(char);
   }

6. Nested Loops:
   for (let i = 0; i < 3; i++) {
       for (let j = 0; j < 2; j++) {
           console.log(\`i: \${i}, j: \${j}\`);
       }
   }

7. Iterating Objects:
   let obj = { name: "Alice", age: 30 };
   for (let key in obj) { // Iterates over object keys.
       console.log(key, obj[key]);
   }

8. Iterating Sets:
   let set = new Set([1, 2, 3]);
   for (let value of set) { // Iterates over set values.
       console.log(value);
   }

9. Iterating Maps:
   let map = new Map();
   map.set("key1", "value1");
   map.set("key2", "value2");
   for (let [key, value] of map) { // Iterates over map key-value pairs.
       console.log(key, value);
   }

10. Array map():
   let arr = [1, 2, 3];
   console.log(arr.map(x => x * 2)); // [2, 4, 6]

11. Array filter():
   console.log(arr.filter(x => x > 1)); // [2, 3]

12. Array reduce():
   console.log(arr.reduce((sum, x) => sum + x, 0)); // 6

13. Array forEach():
   arr.forEach(x => console.log(x));

14. Iterating Strings:
   for (let char of "Hello") {
       console.log(char);
   }

15. Iterating Nested Arrays:
   let nested = [[1, 2], [3, 4]];
   for (let arr of nested) {
       console.log(arr);
   }

16. Iterating with Index:
   arr.forEach((value, index) => console.log(index, value));

17. Infinite Loop (with Break):
   let i = 0;
   while (true) {
       console.log(i);
       if (i === 5) break;
       i++;
   }

18. Iterating Backwards:
   for (let i = arr.length - 1; i >= 0; i--) {
       console.log(arr[i]);
   }

19. Iterating with Conditions:
   for (let i = 0; i < 10; i++) {
       if (i % 2 === 0) console.log(i);
   }

20. Iterating Objects with Object.entries():
   let user = { name: "Alice", age: 30 };
   for (let [key, value] of Object.entries(user)) {
       console.log(key, value);
   }
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

2. Arrow Function:
   let square = x => x ** 2; // A concise way to write a function.
   console.log(square(4)); // Output: 16

3. Combining Both:
   let isEven = num => num % 2 === 0 ? "Even" : "Odd"; // Combines ternary and arrow functions.
   console.log(isEven(3)); // Output: Odd

4. Nested Ternary:
   let score = 85;
   let grade = score > 90 ? "A" : score > 80 ? "B" : "C"; // Nested ternary expressions.
   console.log(grade); // Output: B

5. Arrow Function with Default Parameters:
   let greet = (name = "Guest") => \`Hello, \${name}!\`;
   console.log(greet()); // Output: Hello, Guest

6. Arrow Function Returning Object:
   let createUser = (name, age) => ({ name, age });
   console.log(createUser("Alice", 30)); // Output: { name: "Alice", age: 30 }

7. Arrow Function with Rest Parameters:
   let sum = (...nums) => nums.reduce((total, num) => total + num, 0);
   console.log(sum(1, 2, 3)); // Output: 6

8. Arrow Function with Spread Operator:
   let multiply = (a, b, c) => a * b * c;
   let nums = [2, 3, 4];
   console.log(multiply(...nums)); // Output: 24

9. Arrow Function with Array Methods:
   let arr = [1, 2, 3];
   console.log(arr.map(x => x * 2)); // [2, 4, 6]

10. Arrow Function with Conditional Logic:
   let checkAge = age => age >= 18 ? "Adult" : "Minor";
   console.log(checkAge(20)); // Output: Adult

11. Arrow Function with Template Literals:
   let greetUser = name => \`Hello, \${name}!\`;
   console.log(greetUser("Alice")); // Output: Hello, Alice

12. Arrow Function with Object Destructuring:
   let display = ({ name, age }) => \`Name: \${name}, Age: \${age}\`;
   console.log(display({ name: "Alice", age: 30 })); // Output: Name: Alice, Age: 30

13. Arrow Function with Array Destructuring:
   let sumFirstTwo = ([a, b]) => a + b;
   console.log(sumFirstTwo([1, 2, 3])); // Output: 3

14. Arrow Function with Nested Functions:
   let outer = () => {
       let inner = () => "Inner Function";
       return inner();
   };
   console.log(outer()); // Output: Inner Function

15. Arrow Function with Try-Catch:
   let safeDivide = (a, b) => {
       try {
           if (b === 0) throw "Division by zero!";
           return a / b;
       } catch (error) {
           return error;
       }
   };
   console.log(safeDivide(10, 0)); // Output: Division by zero!

16. Arrow Function with Loops:
   let sumArray = arr => {
       let sum = 0;
       for (let num of arr) {
           sum += num;
       }
       return sum;
   };
   console.log(sumArray([1, 2, 3])); // Output: 6

17. Arrow Function with Higher-Order Function:
   let doubleArray = arr => arr.map(num => num * 2);
   console.log(doubleArray([1, 2, 3])); // [2, 4, 6]

18. Arrow Function with Object Methods:
   let getKeys = obj => Object.keys(obj);
   console.log(getKeys({ name: "Alice", age: 30 })); // ["name", "age"]

19. Arrow Function with Nested Arrays:
   let nestedSum = arr => arr.flat().reduce((sum, num) => sum + num, 0);
   console.log(nestedSum([[1, 2], [3, 4]])); // Output: 10

20. Arrow Function with Chained Methods:
   let processArray = arr => arr.filter(x => x > 1).map(x => x * 2);
   console.log(processArray([1, 2, 3])); // [4, 6]
        `;
        outputElement.innerText = examples;
    }
}