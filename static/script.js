// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// JavaScript Variables
function showVariablesExample() {
    const examples = `
1. var:
   var x = 10;
   console.log(x);

2. let:
   let y = 20;
   y = 30;
   console.log(y);

3. const:
   const z = 40;
   console.log(z);

4. Block Scope:
   {
       let a = 50;
       console.log(a);
   }

5. Global Scope:
   var globalVar = "I am global";
   console.log(globalVar);

6. Hoisting with var:
   console.log(hoistedVar);
   var hoistedVar = "Hoisted";

7. No Hoisting with let:
   // console.log(notHoisted); // Error
   let notHoisted = "Not Hoisted";

8. Reassignment:
   let reassignable = 100;
   reassignable = 200;
   console.log(reassignable);

9. Constants:
   const constantValue = 300;
   // constantValue = 400; // Error

10. Template Literals:
   let name = "Alice";
   console.log(\`Hello, \${name}!\`);

11. Dynamic Typing:
   let dynamic = 42;
   dynamic = "Now I'm a string";
   console.log(dynamic);

12. Undefined:
   let undefinedVar;
   console.log(undefinedVar);

13. Null:
   let nullVar = null;
   console.log(nullVar);

14. Arrays:
   let arr = [1, 2, 3];
   console.log(arr);

15. Objects:
   let obj = { key: "value" };
   console.log(obj);

16. Functions as Variables:
   let greet = function() {
       return "Hello!";
   };
   console.log(greet());

17. Arrow Functions:
   let arrowGreet = () => "Hello, Arrow!";
   console.log(arrowGreet());

18. Boolean Variables:
   let isTrue = true;
   console.log(isTrue);

19. Numbers:
   let num = 123;
   console.log(num);

20. Strings:
   let str = "JavaScript";
   console.log(str);
    `;
    document.getElementById("variablesOutput").innerText = examples;
}

// JavaScript Data Types
function showDataTypesExample() {
    const examples = `
1. String:
   let str = "Hello, World!";
   console.log(str);

2. Number:
   let num = 42;
   console.log(num);

3. Boolean:
   let isTrue = true;
   console.log(isTrue);

4. Object:
   let obj = { name: "Alice", age: 30 };
   console.log(obj);

5. Array:
   let arr = [1, 2, 3];
   console.log(arr);

6. Null:
   let nullValue = null;
   console.log(nullValue);

7. Undefined:
   let undefinedValue;
   console.log(undefinedValue);

8. BigInt:
   let bigIntValue = 123456789012345678901234567890n;
   console.log(bigIntValue);

9. Symbol:
   let sym = Symbol("unique");
   console.log(sym);

10. typeof Operator:
   console.log(typeof str); // "string"

11. String Methods:
   console.log(str.toUpperCase());

12. Array Methods:
   console.log(arr.map(x => x * 2));

13. Object Methods:
   console.log(Object.keys(obj));

14. Boolean Logic:
   console.log(!isTrue);

15. Number Methods:
   console.log(num.toFixed(2));

16. Template Literals:
   console.log(\`Hello, \${obj.name}!\`);

17. Nested Objects:
   let nestedObj = { person: { name: "Bob", age: 25 } };
   console.log(nestedObj.person.name);

18. Nested Arrays:
   let nestedArr = [[1, 2], [3, 4]];
   console.log(nestedArr[0][1]);

19. Combining Types:
   let mixed = [1, "two", { three: 3 }];
   console.log(mixed);

20. Dynamic Typing:
   let dynamic = "string";
   dynamic = 123;
   console.log(dynamic);
    `;
    document.getElementById("dataTypesOutput").innerText = examples;
}

// JavaScript Data Structures and Methods
function showDataStructuresExample() {
    const examples = `
1. Arrays:
   let arr = [1, 2, 3];
   console.log(arr);

2. Objects:
   let obj = { key: "value" };
   console.log(obj);

3. Sets:
   let set = new Set([1, 2, 2, 3]);
   console.log(set);

4. Maps:
   let map = new Map();
   map.set("key", "value");
   console.log(map);

5. Nested Structures:
   let nested = { arr: [1, 2, 3], obj: { key: "value" } };
   console.log(nested);

6. Array Methods:
   console.log(arr.map(x => x * 2));

7. Object Methods:
   console.log(Object.keys(obj));

8. Set Methods:
   set.add(4);
   console.log(set);

9. Map Methods:
   map.set("newKey", "newValue");
   console.log(map);

10. Combining Structures:
   let combined = [obj, set, map];
   console.log(combined);

11. Array Iteration:
   arr.forEach(x => console.log(x));

12. Object Iteration:
   for (let key in obj) {
       console.log(key, obj[key]);
   }

13. Set Iteration:
   for (let value of set) {
       console.log(value);
   }

14. Map Iteration:
   for (let [key, value] of map) {
       console.log(key, value);
   }

15. Array Filtering:
   console.log(arr.filter(x => x > 1));

16. Array Reducing:
   console.log(arr.reduce((sum, x) => sum + x, 0));

17. Object Destructuring:
   let { key } = obj;
   console.log(key);

18. Array Destructuring:
   let [first, second] = arr;
   console.log(first, second);

19. Spread Operator:
   let newArr = [...arr, 4];
   console.log(newArr);

20. Rest Operator:
   function sum(...nums) {
       return nums.reduce((sum, x) => sum + x, 0);
   }
   console.log(sum(1, 2, 3));
    `;
    document.getElementById("dataStructuresOutput").innerText = examples;
}

// Add similar updates for Functions, Operators, Iteration, and Ternary Expressions/Arrow Functions
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

6. Anonymous Function:
   let greet = function() {
       return "Hello!";
   };
   console.log(greet());

7. Immediately Invoked Function Expression (IIFE):
   (function() {
       console.log("IIFE executed!");
   })();

8. Function Returning a Function:
   function outer() {
       return function inner() {
           return "Hello from inner!";
       };
   }
   console.log(outer()());

9. Function with Rest Parameters:
   function sum(...nums) {
       return nums.reduce((total, num) => total + num, 0);
   }
   console.log(sum(1, 2, 3, 4)); // 10

10. Function with Spread Operator:
   function multiply(a, b, c) {
       return a * b * c;
   }
   let nums = [2, 3, 4];
   console.log(multiply(...nums)); // 24

11. Callback Function:
   function processArray(arr, callback) {
       return arr.map(callback);
   }
   console.log(processArray([1, 2, 3], num => num * 2)); // [2, 4, 6]

12. Function with Destructuring:
   function display({ name, age }) {
       console.log(\`Name: \${name}, Age: \${age}\`);
   }
   display({ name: "Alice", age: 30 });

13. Function with Default Object Parameter:
   function displayUser(user = { name: "Guest", age: 0 }) {
       console.log(\`Name: \${user.name}, Age: \${user.age}\`);
   }
   displayUser();

14. Function with Template Literals:
   function greet(name) {
       return \`Hello, \${name}!\`;
   }
   console.log(greet("Alice"));

15. Function with Conditional Logic:
   function checkAge(age) {
       return age >= 18 ? "Adult" : "Minor";
   }
   console.log(checkAge(20)); // Adult

16. Function with Array Methods:
   function doubleArray(arr) {
       return arr.map(num => num * 2);
   }
   console.log(doubleArray([1, 2, 3])); // [2, 4, 6]

17. Function with Object Methods:
   function getKeys(obj) {
       return Object.keys(obj);
   }
   console.log(getKeys({ name: "Alice", age: 30 })); // ["name", "age"]

18. Function with Nested Functions:
   function outer() {
       function inner() {
           return "Inner Function";
       }
       return inner();
   }
   console.log(outer());

19. Function with Try-Catch:
   function safeDivide(a, b) {
       try {
           if (b === 0) throw "Division by zero!";
           return a / b;
       } catch (error) {
           return error;
       }
   }
   console.log(safeDivide(10, 0)); // Division by zero!

20. Function with Loops:
   function sumArray(arr) {
       let sum = 0;
       for (let num of arr) {
           sum += num;
       }
       return sum;
   }
   console.log(sumArray([1, 2, 3])); // 6
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

4. Assignment Operators:
   let x = 10;
   x += 5;
   console.log(x); // 15

5. Ternary Operator:
   let age = 18;
   let status = age >= 18 ? "Adult" : "Minor";
   console.log(status); // Adult

6. if-else:
   let num = 10;
   if (num > 5) {
       console.log("Greater than 5");
   } else {
       console.log("5 or less");
   }

7. switch:
   let day = "Monday";
   switch (day) {
       case "Monday":
           console.log("Start of the week");
           break;
       default:
           console.log("Another day");
   }

8. typeof Operator:
   console.log(typeof "Hello"); // string

9. instanceof Operator:
   console.log([] instanceof Array); // true

10. Nullish Coalescing Operator:
   let value = null ?? "Default";
   console.log(value); // Default

11. Optional Chaining:
   let user = { name: "Alice" };
   console.log(user?.address?.city); // undefined

12. Bitwise Operators:
   console.log(5 & 1); // 1

13. Unary Operators:
   let a = 5;
   console.log(-a); // -5

14. Spread Operator:
   let arr = [1, 2, 3];
   console.log([...arr, 4]); // [1, 2, 3, 4]

15. Rest Operator:
   function sum(...nums) {
       return nums.reduce((total, num) => total + num, 0);
   }
   console.log(sum(1, 2, 3)); // 6

16. Destructuring Assignment:
   let [first, second] = [1, 2];
   console.log(first, second); // 1, 2

17. Short-Circuit Evaluation:
   console.log(false || "Default"); // Default

18. Conditional (Chained):
   let score = 85;
   let grade = score > 90 ? "A" : score > 80 ? "B" : "C";
   console.log(grade); // B

19. Loop with Break:
   for (let i = 0; i < 10; i++) {
       if (i === 5) break;
       console.log(i);
   }

20. Loop with Continue:
   for (let i = 0; i < 10; i++) {
       if (i % 2 === 0) continue;
       console.log(i);
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

6. Nested Loops:
   for (let i = 0; i < 3; i++) {
       for (let j = 0; j < 2; j++) {
           console.log(\`i: \${i}, j: \${j}\`);
       }
   }

7. Iterating Objects:
   let obj = { name: "Alice", age: 30 };
   for (let key in obj) {
       console.log(key, obj[key]);
   }

8. Iterating Sets:
   let set = new Set([1, 2, 3]);
   for (let value of set) {
       console.log(value);
   }

9. Iterating Maps:
   let map = new Map();
   map.set("key1", "value1");
   map.set("key2", "value2");
   for (let [key, value] of map) {
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

4. Nested Ternary:
   let score = 85;
   let grade = score > 90 ? "A" : score > 80 ? "B" : "C";
   console.log(grade); // B

5. Arrow Function with Default Parameters:
   let greet = (name = "Guest") => \`Hello, \${name}!\`;
   console.log(greet()); // Hello, Guest

6. Arrow Function Returning Object:
   let createUser = (name, age) => ({ name, age });
   console.log(createUser("Alice", 30));

7. Arrow Function with Rest Parameters:
   let sum = (...nums) => nums.reduce((total, num) => total + num, 0);
   console.log(sum(1, 2, 3)); // 6

8. Arrow Function with Spread Operator:
   let multiply = (a, b, c) => a * b * c;
   let nums = [2, 3, 4];
   console.log(multiply(...nums)); // 24

9. Arrow Function with Array Methods:
   let arr = [1, 2, 3];
   console.log(arr.map(x => x * 2)); // [2, 4, 6]

10. Arrow Function with Conditional Logic:
   let checkAge = age => age >= 18 ? "Adult" : "Minor";
   console.log(checkAge(20)); // Adult

11. Arrow Function with Template Literals:
   let greetUser = name => \`Hello, \${name}!\`;
   console.log(greetUser("Alice"));

12. Arrow Function with Object Destructuring:
   let display = ({ name, age }) => \`Name: \${name}, Age: \${age}\`;
   console.log(display({ name: "Alice", age: 30 }));

13. Arrow Function with Array Destructuring:
   let sumFirstTwo = ([a, b]) => a + b;
   console.log(sumFirstTwo([1, 2, 3])); // 3

14. Arrow Function with Nested Functions:
   let outer = () => {
       let inner = () => "Inner Function";
       return inner();
   };
   console.log(outer());

15. Arrow Function with Try-Catch:
   let safeDivide = (a, b) => {
       try {
           if (b === 0) throw "Division by zero!";
           return a / b;
       } catch (error) {
           return error;
       }
   };
   console.log(safeDivide(10, 0)); // Division by zero!

16. Arrow Function with Loops:
   let sumArray = arr => {
       let sum = 0;
       for (let num of arr) {
           sum += num;
       }
       return sum;
   };
   console.log(sumArray([1, 2, 3])); // 6

17. Arrow Function with Higher-Order Function:
   let doubleArray = arr => arr.map(num => num * 2);
   console.log(doubleArray([1, 2, 3])); // [2, 4, 6]

18. Arrow Function with Object Methods:
   let getKeys = obj => Object.keys(obj);
   console.log(getKeys({ name: "Alice", age: 30 })); // ["name", "age"]

19. Arrow Function with Nested Arrays:
   let nestedSum = arr => arr.flat().reduce((sum, num) => sum + num, 0);
   console.log(nestedSum([[1, 2], [3, 4]])); // 10

20. Arrow Function with Chained Methods:
   let processArray = arr => arr.filter(x => x > 1).map(x => x * 2);
   console.log(processArray([1, 2, 3])); // [4, 6]
    `;
    document.getElementById("ternaryArrowOutput").innerText = examples;
}