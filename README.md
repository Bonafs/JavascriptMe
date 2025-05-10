# **JavascriptMe - JavaScript Learning Hub**  
🚀 **Master JavaScript from Beginner to Advanced** 🚀  

JavascriptMe is an **interactive JavaScript learning platform** designed to help users master JavaScript concepts with **hands-on examples**, authentication features, and **real-world applications**.

---

## **📌 Features**
- 🔰 **Beginner Concepts:** Variables, Functions, Loops, Conditions  
- 🚀 **Intermediate Level:** Arrays, Event Handling, DOM Manipulation, Fetch API  
- 💡 **Advanced Techniques:** Closures, WebSockets, Web Workers, Graph Algorithms  
- 🛠 **User Authentication:** Login & Registration (Flask & PostgreSQL)  
- 📈 **Data Visualization:** Integrated **Chart.js** for dynamic learning  
- 🌙 **Dark Mode Toggle:** Customizable UI for accessibility  
- 🔥 **API Endpoints:** Save learning progress and retrieve user data  

---

## **📌 Installation**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/JavascriptMe.git
cd JavascriptMe
```

### **2️⃣ Create a Virtual Environment & Install Dependencies**
```bash
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate  # Windows
pip install -r requirements.txt
```

### **3️⃣ Set Up PostgreSQL Database**
Ensure PostgreSQL is running, then create a database:
```sql
CREATE DATABASE js_mastery;
```
Update **app.py** with your PostgreSQL credentials.

### **4️⃣ Run the Application**
```bash
python app.py
```
Visit `http://localhost:5000` in your browser.

---

## **📌 API Documentation**
### **Base URL**
```plaintext
http://your-deployed-url.com
```

### **Authentication APIs**
| Endpoint | Method | Description | Parameters | Response |
|----------|--------|-------------|------------|----------|
| `/register` | `POST` | Registers a new user | `username (string)`, `password (string)` | `{ "message": "User registered successfully!" }` |
| `/login` | `POST` | Authenticates a user | `username (string)`, `password (string)` | `{ "message": "Welcome, <username>!" }` or `{ "error": "Invalid credentials" }` |
| `/logout` | `POST` | Ends the user session | None | `{ "message": "Logged out successfully!" }` |

### **User Data APIs**
| Endpoint | Method | Description | Parameters | Response |
|----------|--------|-------------|------------|----------|
| `/get-user-data` | `GET` | Retrieves user progress | None | `{ "username": "user123", "progress": ["basics", "intermediate"] }` |
| `/update-progress` | `POST` | Saves progress data | `section (string)` | `{ "message": "Progress updated" }` |

### **Error Handling**
| Error | Reason | Solution |
|-------|--------|----------|
| `400 - Bad Request` | Missing or invalid parameters | Ensure all fields are correctly filled |
| `401 - Unauthorized` | Invalid login credentials | Retry with correct username/password |
| `500 - Server Error` | Internal issue | Contact admin or retry later |

---

## **📌 Deployment**
### **🚀 Deploy on Heroku**
```bash
heroku create javascriptme-app
git push heroku main
heroku open
```

### **🚀 Deploy on AWS EC2**
```bash
ssh -i "your-key.pem" ubuntu@your-ec2-public-ip
git clone https://github.com/yourusername/JavascriptMe.git
cd JavascriptMe
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
gunicorn --bind 0.0.0.0:5000 app:app
```
Use **Nginx** for port forwarding (80 → 5000).

---

## **📌 UI Enhancements & Animations**
### ✅ **Dark Mode Toggle**
```css
.dark-mode {
    background-color: #222;
    color: white;
}
```
```javascript
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
```

### ✅ **Smooth Animations**
```css
.fade-in {
    opacity: 0;
    transform: translateY(10px);
    animation: fadeInAnimation 0.8s ease-in forwards;
}
```
```javascript
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => section.classList.add("fade-in"));
});
```

---

## **📌 Contributing**
💡 **Contributions Welcome!**  
Fork the repo, create a branch, and submit a pull request:
```bash
git checkout -b feature-name
git commit -m "Added feature"
git push origin feature-name
```
## **📌 License**
Mobolaji Onafuwa.
AI-Augmented Fullstack Developer.
Copyright 2025.

🚀 **Happy Coding!** 🚀  

