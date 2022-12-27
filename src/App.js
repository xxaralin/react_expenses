import React, { useState } from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

function App() { 
  const [expenses,setExpenses]=useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'New Chair',
      amount: 350,
      date: new Date(2022, 6, 12),
    },
    {
      id: 'e6',
      title: 'Car',
      amount: 45000,
      date: new Date(2021, 9, 23),
    },
    {
      id: 'e7',
      title: 'Phone',
      amount: 1450,
      date: new Date(2021, 1, 18),
    },
    {
      id: 'e8',
      title: 'Holiday',
      amount: 900,
      date: new Date(2021, 9, 29),
    },
    {
      id: 'e9',
      title: 'Smart Watch',
      amount: 800,
      date: new Date(2022, 7, 14),
    },

])

  const handleAddExpense=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]})
  }
  return (
    <div>
      <NewExpense handleAddExpense={handleAddExpense}/>
      <ExpenseList props={expenses}/>
    </div>
  );

  //alternative to this return shit
  //createElement('element tagi',{varsa props,yoksa boş parantez},'tagler arası context')
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(ExpenseList,{props:expenses})
  //   //eğer tag bizim kendi tagimizse tırnaksız
  // );
}

export default App;
