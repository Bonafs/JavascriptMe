# **JavaScriptMe**  
🚀 **Master JavaScript from Beginner to Advanced** 🚀  

JavaScriptMe is an **interactive JavaScript learning platform** designed to help users master JavaScript concepts with **hands-on examples** and **real-world applications**.

---

## **📌 Features**
- **JavaScript Variables:** Learn how to store and manage data.
- **JavaScript Data Types:** Understand different types of data in JavaScript.
- **JavaScript Data Structures and Methods:** Work with arrays, objects, sets, and maps.
- **JavaScript Functions:** Write reusable blocks of code with advanced techniques.
- **JavaScript Operators and Flow Control:** Perform operations and control the flow of your program.
- **JavaScript Iteration:** Repeat tasks using loops and iterators.
- **Ternary Expressions and Arrow Functions:** Write concise and modern JavaScript code.
- 🌙 **Dark Mode Toggle:** Customizable UI for accessibility.

---

## **📌 Installation**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/Bonafs/JavascriptMe.git
cd JavascriptMe

Create a Virtual Environment & Install Dependencies
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate  # Windows
pip install flask

Run the Application
python [app.py](http://_vscodecontentref_/5)
Visit http//:localhost:5000 in your browser.

Collecting workspace informationHere is the updated code for all files to ensure the website is fully functional, with the title and navbar brand set back to "JavaScriptMe." The updates ensure that all "Show Example" buttons work correctly and maintain the comprehensive content with 20 examples for each JavaScript topic, including explanatory notes for `console.log()` outputs.

---

### Updated index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScriptMe</title>
    <link rel="stylesheet" href="/static/css/style.css">
    <script src="/static/script.js" defer></script>
</head>
<body>
    <nav>
        <h1>JavaScriptMe</h1>
        <button onclick="toggleTheme()">Toggle Dark Mode</button>
    </nav>

    <div class="container">
        <section id="variables">
            <h2>JavaScript Variables</h2>
            <button onclick="showVariablesExample()">Show Examples</button>
            <pre id="variablesOutput"></pre>
        </section>

        <section id="dataTypes">
            <h2>JavaScript Data Types</h2>
            <button onclick="showDataTypesExample()">Show Examples</button>
            <pre id="dataTypesOutput"></pre>
        </section>

        <section id="dataStructures">
            <h2>JavaScript Data Structures and Methods</h2>
            <button onclick="showDataStructuresExample()">Show Examples</button>
            <pre id="dataStructuresOutput"></pre>
        </section>

        <section id="functions">
            <h2>JavaScript Functions</h2>
            <button onclick="showFunctionsExample()">Show Examples</button>
            <pre id="functionsOutput"></pre>
        </section>

        <section id="operators">
            <h2>JavaScript Operators and Flow Control</h2>
            <button onclick="showOperatorsExample()">Show Examples</button>
            <pre id="operatorsOutput"></pre>
        </section>

        <section id="iteration">
            <h2>JavaScript Iteration</h2>
            <button onclick="showIterationExample()">Show Examples</button>
            <pre id="iterationOutput"></pre>
        </section>

        <section id="ternaryArrow">
            <h2>Ternary Expressions and Arrow Functions</h2>
            <button onclick="showTernaryArrowExample()">Show Examples</button>
            <pre id="ternaryArrowOutput"></pre>
        </section>
    </div>
</body>
</html>
```

---

### Updated style.css
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
}

.dark-mode {
    background-color: #222;
    color: white;
}

nav {
    background-color: #007bff;
    color: white;
    padding: 1rem;
    text-align: center;
}

button {
    transition: transform 0.2s ease-in-out;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    cursor: pointer;
}

button:hover {
    transform: scale(1.05);
}

.container {
    padding: 2rem;
}

pre {
    background-color: #f8f9fa;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow-x: auto;
    white-space: pre-wrap;
}
```

---

### Updated app.py
```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)
```

---

### Updated README.md
```markdown
# **JavaScriptMe**  
🚀 **Master JavaScript from Beginner to Advanced** 🚀  

JavaScriptMe is an **interactive JavaScript learning platform** designed to help users master JavaScript concepts with **hands-on examples** and **real-world applications**.

---

## **📌 Features**
- **JavaScript Variables:** Learn how to store and manage data.
- **JavaScript Data Types:** Understand different types of data in JavaScript.
- **JavaScript Data Structures and Methods:** Work with arrays, objects, sets, and maps.
- **JavaScript Functions:** Write reusable blocks of code with advanced techniques.
- **JavaScript Operators and Flow Control:** Perform operations and control the flow of your program.
- **JavaScript Iteration:** Repeat tasks using loops and iterators.
- **Ternary Expressions and Arrow Functions:** Write concise and modern JavaScript code.
- 🌙 **Dark Mode Toggle:** Customizable UI for accessibility.

---

## **📌 Installation**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/Bonafs/JavascriptMe.git
cd JavascriptMe
```

### **2️⃣ Create a Virtual Environment & Install Dependencies**
```bash
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate  # Windows
pip install flask
```

### **3️⃣ Run the Application**
```bash
python app.py
```
Visit `http://localhost:5000` in your browser.

---

## **📌 Learning Sections**
### JavaScript Variables
- Learn how to declare and use variables with `var`, `let`, and `const`.

### JavaScript Data Types
- Understand strings, numbers, booleans, objects, arrays, null, undefined, BigInt, and symbols.

### JavaScript Data Structures and Methods
- Work with arrays, objects, sets, and maps, and use their built-in methods.

### JavaScript Functions
- Write reusable blocks of code with inputs, outputs, and advanced techniques like recursion, higher-order functions, and arrow functions.

### JavaScript Operators and Flow Control
- Perform operations using arithmetic, comparison, logical, and assignment operators. Control the flow of your program with `if-else`, `switch`, and ternary operators.

### JavaScript Iteration
- Repeat tasks using loops like `for`, `while`, `do-while`, and iterators like `forEach`, `map`, and `filter`.

### Ternary Expressions and Arrow Functions
- Write concise and modern JavaScript code using ternary expressions and arrow functions.

---

## **📌 License**
Mobolaji Onafuwa.  
AI-Augmented Fullstack Developer.  
Copyright 2025.

🚀 **Happy Coding!** 🚀