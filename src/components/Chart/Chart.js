import React from 'react'
import ChartBar from './ChartBar'
import "./Chart.css"

function Chart(props) {
    let expensesAsArray, totalMax;
    let totalExpenses= [
        {month:"Jan", amount:0}, 
        {month:"Feb", amount:0}, 
        {month:"Mar", amount:0}, 
        {month:"Apr", amount:0}, 
        {month:"May", amount:0}, 
        {month:"Jun", amount:0}, 
        {month:"Jul", amount:0},
        {month:"Aug", amount:0}, 
        {month:"Sep", amount:0}, 
        {month:"Oct", amount:0}, 
        {month:"Nov", amount:0}, 
        {month:"Dec", amount:0}
    ];
    const calculateMonthlyExpense=(shit)=>{        
        shit.map((item)=>{
            for(let m=0;m<12;m++){
                if((item.date.toString().slice(4,7))===totalExpenses[m].month){
                    totalExpenses[m].amount+=item.amount;           
                }
            }
        })
    }
    const displayMonthlyExpenses=()=>{
        const shit = props.expenses.filter(item=>item.date.toString().slice(11,15)===props.year)
        calculateMonthlyExpense(shit);   
        expensesAsArray=totalExpenses.map(item=>item.amount)
        totalMax=Math.max(...expensesAsArray)
    }
    
  return (
    <div className='chart'>
        <div>{displayMonthlyExpenses()}</div>
        {totalExpenses.map((item)=>(<ChartBar key={item.month} name={item.month} value={item.amount} maxValue={totalMax}/>))}
    </div>
  )
}


export default Chart;