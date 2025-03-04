import React, { useContext, useState, useEffect } from "react";
import { ExpenseContext } from "../context";
import { gsap } from "gsap";

function ExpenseForm() {
  const { addExpense } = useContext(ExpenseContext);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description) return;

    const newExpense = {
      amount: parseFloat(amount),
      description,
      date: new Date().toLocaleDateString(),
      id: Date.now(),
    };
    addExpense(newExpense);
    setAmount("");
    setDescription("");
  };

  useEffect(() => {
    // Animate form elements
    gsap.fromTo(
      ".form input, .form button",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power3.out", delay: 0.8 }
    );

    // Pulse animation for button (won’t affect base opacity)
    gsap.to(".form button", {
      scale: 1.05,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
  
 
  return ( 
     
    <div className="container">
    <p>Please enter negative values for expense,positive for income</p> 
      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div> 
  );
}

export default ExpenseForm;