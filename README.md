
# 🔥AI-Based 3-tier Roasting on the basis of course selection.

> *A Hacker-Themed Comedy App That Roasts Students Based on Their Course*

---

## 👤 Student Information

* **Name:** Sarishma Ghimire
* **Roll Number:** 26
* **Course / Program:** BCA (Bachelor of Computer Applications)
* **Semester / Year:** 3rd Semester / 2021
* **Year of Admission:** 2021

---

## 👨‍🏫 Instructor Information

* **Instructor Name:** Deepak Sir
* **Course Title:** REACT CLASS
* **College Name:** Samridddhi College

---

## 📋 Project Overview

> This is a fun, interactive React application that generates humorous "roasts" (jokes) about students based on their course of study and selected intensity level.
>
> The app features a retro-hacker aesthetic with glitch text effects, neon buttons, and a cyberpunk-style interface.
>
> Students log in with their name and course (IT, Cyber Security, Programming, AI/ML), then select a roast intensity (Mild, Medium, or Danger Zone), and get hilariously "roasted" in a themed, witty manner.
>
> The project demonstrates React state management, component-based architecture, and modern UI design principles.

---

## 🎯 Objectives

* Build an interactive React application with engaging UI
* Implement user authentication and state management using React hooks
* Create reusable, styled components with neon/glitch visual effects
* Demonstrate dynamic content rendering based on user selection
* Apply modern web design principles with a unique cyberpunk aesthetic
* Master React hooks (useState, useEffect) and browser storage (localStorage)
* Practice component composition and prop management

---

## 💻 Technologies Used

### Frontend

* **React.js (v19.2.4)** - UI library
* **HTML5** - Semantic markup
* **CSS3** - Styling with neon and glitch effects
* **JavaScript (ES6+)** - Modern JavaScript

### Build & Development Tools

* **Vite (v8.0.1)** - Fast build tool and development server
* **ESLint (v9.39.4)** - Code quality and linting
* **Chart.js (v4.5.1)** - Data visualization

### Version Control

* **Git & GitHub** - Repository management

---

## ✨ Key Features

* **Login System** - Students select their name and course of study
* **Course Selection** - IT, Cyber Security, Programming, AI/ML options
* **Glitch Text Effects** - Retro-hacker aesthetic text animations
* **Neon Styled Buttons** - Interactive UI elements with glowing effects
* **Dynamic Roast Generation** - Context-specific humor based on course
* **Three Intensity Levels** - Mild, Medium, and Danger Zone roasts
* **Local Storage** - Persistent session management
* **Responsive Design** - Works on desktop, tablet, and mobile devices
* **System Log Component** - Retro terminal-style UI elements

---

## 📱 Screens / Modules

* **Login Page** - User registration with name and course selection
* **Dashboard** - Main roast display and interaction area
* **Roast Display** - Generated roasts with intensity indicator
* **Logout Functionality** - Session management and clear
* **Intensity Selection** - Choose roast severity (Mild/Medium/Danger)

---

## 🗂️ Project Structure

```
/react_task_project_sarishma
│
├── src/
│   ├── components/
│   │   ├── GlitchText.jsx        # Glitch text animation component
│   │   ├── NeonBtn.jsx           # Neon-styled button component
│   │   ├── PieChart.jsx          # Chart visualization component
│   │   ├── Scanlines.jsx         # CRT scanline effect component
│   │   └── SysLog.jsx            # System log styled component
│   │
│   ├── pages/
│   │   ├── LoginPage.jsx         # User login & course selection
│   │   └── Dashboard.jsx         # Main roast display dashboard
│   │
│   ├── App.jsx                   # Main app with routing logic
│   ├── constants.js              # Course and tier definitions
│   ├── data.js                   # Roast database and content
│   ├── main.jsx                  # React entry point
│   ├── index.css                 # Global styles
│   ├── App.css                   # App component styles
│   └── assets/                   # Static assets folder
│
├── public/                       # Public static files
├── index.html                    # HTML template
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint rules
├── package.json                  # Project dependencies
└── README.md                     # This file
```

---

## 🚀 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/sarishma/react_task_project_sarishma.git

# Navigate to project folder
cd react_task_project_sarishma

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint to check code quality
npm run lint
```

---

## 🎮 How to Use

1. **Start the Application** - Run `npm run dev`
2. **Login Page** - Enter your name and select your course:
   - 💾 IT
   - 🔐 Cyber Security
   - 💻 Programming
   - 🤖 AI / ML
3. **Select Roast Intensity** - Choose from:
   - ☕ **Mild Roast** - "A gentle warmup"
   - 🔥 **Medium Roast** - "It starts to sting"
   - ☢️ **Danger Zone** - "No survivors"
4. **Get Roasted** - View your personalized roast message
5. **Logout** - Click logout to end session and return to login

---

## 📦 Component Descriptions

| Component | Purpose |
|-----------|---------|
| `GlitchText.jsx` | Renders text with glitch/distortion animation effects |
| `NeonBtn.jsx` | Styled button component with neon glow and hover effects |
| `PieChart.jsx` | Data visualization component using Chart.js |
| `Scanlines.jsx` | Creates retro CRT scanline visual overlay effect |
| `SysLog.jsx` | Displays system log-style formatted terminal text |
| `LoginPage.jsx` | User authentication and course selection interface |
| `Dashboard.jsx` | Main application interface for displaying roasts |

---

## 🧪 Testing

* ✅ Tested login functionality with all courses
* ✅ Verified roast generation for all 15+ roast entries (3 tiers × 5 courses)
* ✅ Tested UI responsiveness on mobile, tablet, and desktop screens
* ✅ Checked localStorage persistence across page refreshes
* ✅ Validated logout clears session correctly
* ✅ Tested component rendering and styling consistency
* ✅ Verified animation smoothness and performance

---

## 🚧 Challenges Faced

* Managing component state across multiple user interactions
* Creating smooth CSS animations for glitch and neon effects
* Organizing large roast data efficiently in data structures
* Handling session persistence with localStorage API
* Ensuring text animations don't impact readability
* Balancing humor with appropriate academic content
* Creating responsive layouts with special effects

---

## 🔮 Future Enhancements

* Add sound effects for roast delivery (beep, glitch audio)
* Implement roast rating system (funny/not funny/hilarious)
* Add more courses and expanded roast categories
* Create shareable roast images/screenshots feature
* Add smooth page transition animations
* Implement roast history and statistics tracking
* Add dark/light theme toggle
* Create admin panel for adding custom roasts
* Multi-language support
* Leaderboard for most roasted students
* Share roasts on social media
* Add user profiles and roast customization

---

## 📚 References

* [React Documentation](https://react.dev)
* [Vite Guide](https://vitejs.dev)
* [JavaScript ES6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
* [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* [Chart.js Documentation](https://www.chartjs.org)
* [HTML5 localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 🙏 Acknowledgement

> I would like to extend my sincere gratitude to **Deepak Sir** for excellent guidance and support throughout the React Class. Special thanks to **Samridddhi College** for providing the platform, resources, and supportive learning environment to complete this project successfully. I appreciate the creative freedom to build a fun, engaging application that demonstrates practical React development skills.

---

## 📝 Declaration

> I hereby declare that this project is my original work and has been completed as part of my academic submission for the BCA 3rd Semester REACT CLASS course at Samridddhi College. All code, logic, design elements, and roast content have been created by me. I take full responsibility for the content and implementation of this project. No part of this work has been plagiarized or copied from any other source.

---

**Project Status:** ✅ Submitted for Academic Evaluation  
**Last Updated:** March 31, 2026  
**Version:** 1.0.0
