# Smart Distraction Reminder – AI-Based Study Focus & Distraction Detection

**Platform:** Python, Flask  
**Language:** Python, JavaScript  
**Frontend:** HTML, CSS, JavaScript  
**Database:** MySQL  
**Concept:** Natural Language Processing (NLP) and Browser Automation

---

## 📌 Executive Summary & Project Overview

**Smart Distraction Reminder** is an intelligent productivity application designed to help students maintain concentration during study sessions by identifying potentially distracting online content and providing timely reminders.

The system analyzes website content using NLP-based distraction detection and integrates with a Chrome extension to monitor browsing activity. When distracting content is identified, the application displays a warning to encourage users to return to their studies.

By combining Python, Flask, JavaScript, and MySQL, the project provides a practical approach to reducing digital distractions and improving study productivity.

---

## 💼 Problem, Solution & Impact

- **Problem:** Students frequently lose concentration due to distracting websites, entertainment content, social media, and unrelated browsing activities during study sessions.

- **Solution:** Developed an intelligent distraction detection system using NLP-based content analysis, a Flask backend, and a Chrome extension to identify distracting websites and provide focus reminders.

- **Impact:** Encourages better study habits, reduces unnecessary browsing, and helps students maintain focus during learning activities.

---

## 🏗️ System Architecture

```text
          USER BROWSING ACTIVITY
                    |
                    ▼
             CHROME EXTENSION
                    |
                    ▼
           WEBSITE CONTENT ANALYSIS
                    |
                    ▼
             FLASK BACKEND
                    |
                    ▼
          NLP-BASED DETECTION
                    |
             ┌──────┴──────┐
             ▼             ▼
        STUDY CONTENT   DISTRACTING
             |             |
             ▼             ▼
        CONTINUE       WARNING ALERT
                           |
                           ▼
                    FOCUS REMINDER
                           |
                           ▼
                     MYSQL DATABASE
                    (Activity Records)
```

---

## ⚙️ Key Features

1. **Distraction Detection:** Identifies potentially distracting website content using NLP-based analysis.

2. **Study Content Recognition:** Uses study-related keywords to distinguish educational content from potentially distracting content.

3. **Focus Reminders:** Displays timely warning messages when distracting content is detected.

4. **Automatic Tab Management:** Provides a warning period before closing distracting tabs.

5. **Activity Tracking:** Stores user browsing activity and related records in MySQL.

6. **Focus Achievement System:** Includes achievement levels such as Bronze, Silver, Gold, and Platinum to encourage consistent study habits.

---

## 🔍 Distraction Detection Logic

The application categorizes browsing content into two major groups:

| Category | Examples |
|---|---|
| Study-related | Tutorials, lectures, Python, programming |
| Distracting | Reels, pranks, entertainment, movies |

The system evaluates the content and triggers an appropriate response based on the detection result.

### Detection Workflow

- Capture website information through the browser extension.
- Send relevant content to the Flask backend.
- Analyze the content using NLP-based detection logic.
- Identify potentially distracting activity.
- Display a warning reminder.
- Track activity for productivity monitoring.

---

## 💻 Tech Stack & Tools

| Technology | Purpose |
|---|---|
| Python | Backend logic and content analysis |
| Flask | Backend web framework and API |
| JavaScript | Chrome extension functionality |
| HTML | Application structure |
| CSS | User interface styling |
| MySQL | Activity data storage |
| NLP | Content analysis and distraction detection |
| Chrome Extension | Browser activity monitoring |

---

## 🎯 Project Objectives

- Improve students' concentration during online learning.
- Reduce unnecessary browsing distractions.
- Encourage productive internet usage.
- Provide timely reminders during study sessions.
- Promote consistent study habits through achievement tracking.

---

## 🚀 Future Enhancements

- Advanced machine learning-based content classification.
- Personalized study schedules and focus reports.
- Daily and weekly productivity analytics.
- Enhanced dashboard with visual activity reports.
- Smart recommendations for improving study habits.

---

## 👩‍💻 Developed As

An intelligent productivity application combining web development, NLP-based content analysis, and browser extension technology to support focused digital learning.
