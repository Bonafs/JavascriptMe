// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Login Authentication
document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let response = await fetch('/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    let data = await response.json();
    document.getElementById("authMessage").innerText = data.error || data.message;
});

// JavaScript Learning Example
function showExample() {
    let example = "Loop Example: ";
    for (let i = 1; i <= 5; i++) {
        example += i + " ";
    }
    document.getElementById("exampleOutput").innerText = example;
}