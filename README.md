Expense Manager
A simple React-based web application to track income and expenses, visualize your balance, and manage transactions with smooth GSAP animations.

Features
Add income (positive values) and expenses (negative values) with descriptions.
View total income, total expenses, and current balance.
List all transactions with the ability to delete them.
Data persists in localStorage for seamless use across sessions.
Smooth animations powered by GSAP for an enhanced user experience.
Tech Stack
React: Frontend framework for building the UI.
GSAP: Animation library for fluid transitions and effects.
Context API: State management for expenses.
CSS: Styling (via App.css).
LocalStorage: Persists transaction data in the browser.
Components
App.jsx: Main component with animation setup and layout.
Balance.jsx: Displays the current balance calculated from transactions.
ExpenseForm.jsx: Form to add new income/expense entries with animations.
ExpenseList.jsx: Lists transactions with totals and delete functionality.
context.jsx: Provides global state management using React Context API.
Installation
Clone the repository:
bash

Collapse

Wrap

Copy
git clone <repository-url>
Navigate to the project directory:
bash

Collapse

Wrap

Copy
cd expense-manager
Install dependencies:
bash

Collapse

Wrap

Copy
npm install
Start the development server:
bash

Collapse

Wrap

Copy
npm start
Usage
Enter a positive amount for income or a negative amount for expenses in the form.
Add a description and submit to record the transaction.
View your balance, total income, and expenses in real-time.
Delete transactions by clicking the "X" button next to each entry.
