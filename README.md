# 🤖 Interview Planner

An AI-powered interview preparation platform that analyzes a candidate's resume, self-description, and job description to generate a personalized interview strategy using Google Gemini AI.

🔗 **Live Demo:** https://interview-planner-frontend.onrender.com

---

## 🚀 Overview

Interview Planner helps candidates prepare for job interviews by analyzing their profile against a target job description.

The platform uses Generative AI to provide:

- 📊 Resume–Job Match Score
- 💻 Technical Interview Questions
- 🧠 Behavioral Interview Questions
- 🎯 Skill Gap Analysis
- 📅 Personalized Preparation Roadmap
- 📄 AI-Generated, Job-Tailored Resume
- 🔐 Secure User Authentication
- 📱 Fully Responsive UI

---

## ✨ Features

### 🤖 AI-Powered Interview Analysis

Users can upload their resume and provide:

- Job Description
- Self Description
- Resume PDF

Google Gemini analyzes the information and generates a structured interview report.

### 📊 Interview Report

Each generated report includes:

- Match Score
- Technical Questions
- Question Intentions
- Suggested Answer Approach
- Behavioral Questions
- Skill Gaps with Severity
- Day-wise Preparation Plan

### 📄 AI Resume Generator

The platform can generate a job-tailored resume using the candidate's information and target job description.

The generated resume is:

- ATS-friendly
- Professional
- Concise
- Job-specific
- Downloadable as PDF

### 🔐 Authentication

Implemented user authentication with:

- User Registration
- Login
- Logout
- JWT-based authentication
- HTTP-only cookies
- Protected routes
- Persistent authentication

### 📁 Interview History

Users can access previously generated interview reports and open individual reports whenever required.

### 🎨 UI/UX

Designed with a clean, modern interface focused on usability and simplicity.

Includes:

- Responsive layouts
- Mobile-friendly design
- Loading animations
- AI generation progress messages
- Interactive cards
- Clear navigation
- Consistent typography and spacing
- Responsive forms
- Professional interview-report layout

### 📱 Mobile Responsive

The application is optimized for:

- Desktop
- Laptop
- Tablet
- Mobile devices

Layouts, forms, buttons, cards and navigation adapt to different screen sizes.

### ⚡ User Experience

During AI generation, users receive dynamic progress messages such as:

> Reading your resume...

> Analyzing your skills...

> Matching your profile with the job...

> Creating technical questions...

> Building your preparation roadmap...

This provides feedback while the AI processes the request.

### ⚖️ Legal Pages

Added:

- Privacy Policy
- Terms & Conditions

with navigation through the application footer.

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router
- Axios
- SCSS
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer
- Cookie Parser

### AI

- Google Gemini API
- Structured JSON generation
- Zod
- Zod-to-JSON-Schema

### PDF Generation

- Puppeteer
- Chromium

### Deployment

- Render
- MongoDB Atlas

---

## 🏗️ Project Architecture

```text
Interview-Planner/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── services/
│   │
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   └── interview/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
