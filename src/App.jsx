import { useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm.jsx";
import { ExpenseProvider } from "./context.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import Balance from "./components/balance.jsx";
import "./App.css";
import { gsap } from "gsap";

function App() {
  useEffect(() => {
    gsap.fromTo(
      ".app",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      [".balance", ".container", "h2", "p", ".totals", "li"],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,  
        stagger: 0.1, 
        ease: "power2.out",
        delay: 0,
      }
    );
  }, []);

  return (
    <ExpenseProvider>
      <div className="app">
        <Balance />
        <ExpenseForm />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
}

export default App;
