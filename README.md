## React Internationalization Project (Vite + i18next)
 
This project demonstrates how to build a React application with internationalization (i18n) support using i18next and react-i18next.
It includes language detection, manual language switching, and translation files for multiple languages (e.g., English, Hindi, French).


# 🚀 Features
⚡ Built with Vite for fast development and bundling
🌍 Multi-language support using i18next
🔎 Automatic browser language detection
🔄 Manual language switching (buttons)
📑 Organized translation files (locales/en, locales/hi, etc.)
🛠️ Example pages: Home, About, Services, Contact


# 📦 Dependencies
"i18next": "^23.16.0",
"i18next-browser-languagedetector": "^8.0.0",
"react": "^18.3.1",
"react-dom": "^18.3.1",
"react-i18next": "^15.0.3",
"react-router-dom": "^6.27.0"


# 🗂️ Project Structure
src/
  i18n.js
  main.jsx
  App.jsx
  pages/
    Home.jsx
    About.jsx
    Services.jsx
    Contact.jsx
  locales/
    en/translation.json
    hi/translation.json


# ⚙️ Setup Instructions
bash
npm create vite@latest my-i18n-app
cd my-i18n-app
npm install


# Install required dependencies:
bash
npm install react react-dom react-i18next i18next i18next-browser-languagedetector


# Run the Project
bash
npm run dev


# 📌 Usage
The app will auto-detect browser language (English/Hindi).
You can switch languages manually using buttons on the Home page.
All pages (Home, About, Services, Contact) display translated content.