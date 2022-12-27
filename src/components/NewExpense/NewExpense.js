import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

function NewExpense(props) {
  const [editing, setEditing]=useState(false)

    const handleSaveExpenseData=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
         props.handleAddExpense(expenseData);
         setEditing(false)
        
    }
    const editingShit=()=>{
      setEditing(true)
    }
    const stopEditingShit=()=>{
      setEditing(false)
    }
    
  return (
    <div className='new-expense'>
        {!editing && <button onClick={editingShit}>Add New Expense</button>}
        {editing && <ExpenseForm onSaveExpenseData={handleSaveExpenseData} onCancel={stopEditingShit}/>}
    </div>
  )
}

export default NewExpense