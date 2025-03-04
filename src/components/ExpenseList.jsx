import React, { useContext, useEffect } from 'react';
import { ExpenseContext }  from '../context';
import { gsap } from 'gsap';

function ExpenseList() {
  const { expenses , deleteExpense } = useContext(ExpenseContext);

  const totalIncome = (expenses || [])
    .filter((expense) => expense.amount > 0)
    .reduce((sum, expense) => sum + expense.amount, 0);

  const totalExpenses = (expenses || [])
    .filter((expense) => expense.amount < 0)
    .reduce((sum, expense) => sum + Math.abs(expense.amount), 0);

  useEffect(() => { 
    gsap.from('li', {
      duration: 0.3,
      opacity: 0,
      stagger: 0.05,
      ease: 'power2.out'
    })
    
  }, [expenses])

  return (
    <div>
      <h2>Transactions</h2>
      <div className="totals">
        <p>Total Income: {totalIncome}rs</p>
        <p>Total Expenses: {totalExpenses}rs</p>
      </div>
      {(expenses || []).length === 0 ? (
        <p>No transactions yet</p>
      ) : (
        <ul>
          {(expenses || []).map((expense) => (
            <li key={expense.id} className={expense.amount < 0 ? "expense" : "income"}>
              <div>
                {expense.description}{' '}
                {expense.date}
              </div>
              <div>
                {expense.amount < 0 ? "-" : "+"}{Math.abs(expense.amount)}rs
              </div>
              <button  className='delete-btn' onClick={() =>deleteExpense(expense.id)}>X</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;