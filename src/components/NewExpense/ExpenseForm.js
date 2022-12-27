import React, { useState } from 'react'
import "./ExpenseForm.css"
function ExpenseForm(props ) {
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");
    const [date,setDate]=useState("");

    // const [userInput, setUserInput]=useState({
    //     title: '',
    //     amount: '',
    //     date: '',         
    // })
    const handleTitleChange=(event)=>{
        // setUserInput({
        //     ...userInput,
        //     title:event.target.value,
        // })
        //or 
        // setUserInput((prevState)=>{
        //     return {...prevState, title:event.target.value}
        // })
        //but
        setTitle(event.target.value)
        
    }
    const handleAmountChange=(event)=>{
        setAmount(event.target.value)
    }
    const handleDateChange=(event)=>{
        setDate(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const expenseData={
            title:title,
            amount:amount,
            date:new Date(date)
        }   
        props.onSaveExpenseData(expenseData);
        setTitle("")
        setAmount("")
        setDate("")
    
    }
  return (
    
    <form  onSubmit={handleSubmit}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={title} onChange={handleTitleChange}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={amount} onChange={handleAmountChange} min='0.01' step='0.01'/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" value={date} onChange={handleDateChange} min='2019-01-01' max='2022-12-31'/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
        
    </form>

  )
}

export default ExpenseForm;