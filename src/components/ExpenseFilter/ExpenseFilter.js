import React, { useState } from 'react'
import "./ExpenseFilter.css"

function ExpenseGraph(props) {
  const[year,setYear]=useState("2022")

    const handleYear=(event)=>{
      setYear(event.target.value)
        props.onChangeFilter(event.target.value);
    }
  return (
    <div>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select onChange={handleYear}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>

      
    </div>
  );
}

export default ExpenseGraph;