# Smart Task Analyzer — Internship Assignment 2025

A mini-application that intelligently analyzes, scores, and prioritizes tasks using a custom-designed algorithm.
This project was built as part of the Singularium Software Development Intern Assessment 2025.

## 🚀 Features
Backend (Django + DRF)

/api/tasks/analyze/ → Sort tasks by smart priority score

/api/tasks/suggest/ → Recommend top 3 tasks with reasons

Scoring algorithm considers:

Urgency

Importance

Estimated effort

Dependencies

Multiple sorting strategies:

Smart Balance (default)

Fastest Wins

High Impact

Deadline Driven

Frontend (HTML + CSS + JavaScript)

Form to add tasks

Paste JSON for bulk input

Analyze tasks button (calls backend API)

Color-coded priority indicators

Explanations for each task

Strategy dropdown selector

Responsive UI (works on all screen sizes)

## 🧠 Algorithm Explanation (300–500 words)

The core of this application is the priority scoring algorithm, designed to evaluate tasks based on multiple competing factors: urgency, importance, effort, and dependencies. The goal is to help users understand which tasks should be completed first in a balanced and logical manner.

Urgency measures how soon a task is due. Tasks with a near or past due date receive higher urgency scores. Overdue tasks receive the maximum urgency weight because they represent critical items that require immediate attention.

Importance is a user-defined value between 1 and 10. Tasks marked with higher importance contribute significantly to the final score. This helps users prioritize tasks that have greater impact or value.

Effort represents estimated hours needed to complete a task. Lower-effort tasks are treated as “quick wins” and are given a positive weight because they can be completed faster while improving productivity and momentum.

Dependencies indicate whether completing a task unblocks other tasks. The more tasks that depend on it, the higher the score. This ensures that important blocker tasks rank higher.

To improve flexibility, four different scoring strategies are implemented:

Fastest Wins: Prioritizes tasks requiring the least effort.

High Impact: Focuses strongly on importance over all other factors.

Deadline Driven: Emphasizes urgency and due dates.

Smart Balance: A balanced multi-factor strategy combining urgency, importance, effort, and dependencies.

The algorithm also handles edge cases such as missing data, overdue tasks, and invalid values. This ensures reliability and realistic outputs. Additionally, the scoring logic is structured to be easily configurable so weights can be tuned or extended.

Overall, the algorithm demonstrates critical thinking, clean logic design, and balanced decision-making in real-world task prioritization.

## 📁 Project Structure
task-analyzer/
├── backend/
│   ├── task_analyzer/
│   ├── tasks/
│   └── requirements.txt
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── README.md

## 🧪 Unit Tests

Includes 3+ backend test cases:

Score calculation returns a number

High importance > low importance

Low effort preferred in Fastest Wins

Run tests:

cd backend
python manage.py test

## 🛠 Setup Instructions
Backend
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

Frontend

Open:

frontend/index.html


(or run live server)

## ⏳ Time Breakdown

Algorithm design: 1 hour

Backend API: 1 hour

Frontend UI: 1 hour

Testing + Debugging: 30 min

Documentation: 20 min

## 🔮 Future Improvements

Visual dependency graph

Eisenhower matrix chart

Notification system

User preference-based weighting

Database storage for persistent tasks

## 📌 Submission

Please find all source code, unit tests, and documentation in this repository.

## 3. Professional Commit Messages (Use these):
feat: add task model, serializer, and scoring engine
feat: implement analyze and suggest API endpoints
feat: add multi-strategy task scoring (4 modes)
feat: create frontend UI with task form and JSON import
feat: add strategy dropdown and priority badges
test: add unit tests for scoring algorithm
docs: add full README with algorithm explanation
chore: project structure cleanup and optimization
