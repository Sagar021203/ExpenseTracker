import React, { useContext, useEffect } from "react";
import { ExpenseContext } from "../context"; 

function Balance() {
  const { expenses } = useContext(ExpenseContext);
 
 
  const totalIncome = (expenses || [])
    .filter((expense) => expense.amount > 0)
    .reduce((sum, expense) => sum + expense.amount, 0);
 
  const totalExpenses = (expenses || [])
    .filter((expense) => expense.amount < 0)
    .reduce((sum, expense) => sum + Math.abs(expense.amount), 0);
 
  const balance = totalIncome - totalExpenses;

  return (
    <div>
      <h2 style={{ borderBottom: "1px solid grey", paddingBottom: "30px" }}>
        Expense Manager
      </h2>
      <div>
        <h2>Balance</h2>
        <p>{balance.toFixed(2)}rs</p>
      </div>
    </div>
  );
}

export default Balance;