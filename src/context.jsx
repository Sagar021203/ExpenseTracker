import {  createContext, useEffect, useState } from "react";
import React from 'react'

export const ExpenseContext = createContext()

export const ExpenseProvider = ({children})=>{

    const [expenses , setExpenses] = useState(()=>{
      const setItemsToLocal = localStorage.getItem('expenses');
      try{
         return setItemsToLocal ? JSON.parse(setItemsToLocal) : [];
      }catch(e){
         console.error('failed to parse the data' , e);
         return [];
      }
    });


    useEffect(()=>{
      localStorage.setItem('expenses',JSON.stringify(expenses))
    },[expenses])
 
     const addExpense = (newExpense)=>{
        const expenseWithId = {
            ...newExpense,
            id : Date.now(),

        };
        setExpenses((prevExpenses)=>[...prevExpenses,expenseWithId])

     }
     const deleteExpense = (id)=>{
         setExpenses((prevExpense)=>{
            const newExpense = prevExpense.filter((expense)=> expense.id !== id)
            console.log('expenses after deletion NewExpenses:',newExpense)
            return newExpense;
         })

     }   

     const value  = {
        expenses,
        addExpense,
        deleteExpense
     }
     return(
        <ExpenseContext.Provider value={value}>
            {children}
        </ExpenseContext.Provider>
     )





}
