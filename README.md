# 🌍 Language Translation Tool

A full-stack Language Translation Tool built using HTML, CSS, JavaScript, Node.js, and Express.  
This project allows users to translate text between multiple languages with features like speech output, language swapping, and a modern dark-themed UI with gradient styling.

---

## 🚀 Features

- Translate text between 25+ languages (Indian and international)
- Auto-detect source language with safe fallback handling
- Swap source and target languages instantly
- Text-to-speech support for both input and translated output
- Copy translated text to clipboard
- Clean, responsive dark UI with gradient effects
- Simple and user-friendly interface

---

## 🛠 Tech Stack

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Node.js
- Express.js

API:
- MyMemory Translation API

---

## 📁 Project Structure

Language-Translation-Tool  
├── public  
│   ├── index.html  
│   ├── script.js  
│   └── style.css  
├── server.js  
├── package.json  
├── package-lock.json  
├── .gitignore  
└── README.md  

---

## ▶️ How to Run Locally

1. Clone the repository  
   git clone <your-repository-url>

2. Navigate into the project folder  
   cd Language-Translation-Tool

3. Install dependencies  
   npm install

4. Start the server  
   npm start

5. Open your browser and visit  
   http://localhost:3000

---

## 💡 How the Application Works

- The user enters text and selects source and target languages.
- The frontend sends the text to the Node.js backend using a POST request.
- The backend communicates with an external translation API.
- The translated text is returned and displayed on the UI.
- Users can listen to the input or translated text using speech synthesis.
- The translated output can be copied to the clipboard with a single click.

---

## 🎯 Purpose of the Project

This project was developed as part of an internship task and learning process to gain hands-on experience with:

- Frontend and backend integration
- Working with third-party APIs
- Building real-world full-stack applications
- Improving UI/UX design and usability

---

## 👤 Author

Suryansh

---

## 📌 Note

This project is created for educational and learning purposes and demonstrates a complete, working language translation tool using modern web technologies.
