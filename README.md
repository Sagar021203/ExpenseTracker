# Expense Manager App

A simple React app to track income and expenses with real-time balance calculation and animations.
- Live Preview: https://expense-trackerr-theta.vercel.app/

## Features

- Track income (positive) and expenses (negative).
- Real-time balance calculation.
- Data persistence using `localStorage`.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Sagar021203/ExpenseTracker.git
    cd <repository_directory>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open `http://localhost:3000` in your browser.

## File Structure

- **`App.jsx`**: Root component rendering `Balance`, `ExpenseForm`, and `ExpenseList`.
- **`balance.jsx`**: Displays the current balance.
- **`expenseform.jsx`**: Form to input income/expenses.
- **`expenseList.jsx`**: Lists all transactions with delete functionality.
- **`context.jsx`**: Manages global state using Context API.

## Technologies Used

- React
- GSAP (for animations)
- Context API
- `localStorage` (for data persistence)

## How It Works

1. Add income/expenses using the form.
2. View updated balance.
3. Delete transactions from the list.

Feel free to reach out for any questions!
