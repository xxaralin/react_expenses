import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import "./ExpenseList.css"
import { useState } from 'react';
import Chart from '../Chart/Chart';

function ExpenseList({props}) {
  const [filteredYear, setFilteredYear] = useState('2022');
  
  const handleFilterChange=(year)=>{
    setFilteredYear(year);
  }
  const filteredList=props.filter(item=> item.date.getFullYear().toString()===filteredYear)
  return (
    <Card className='expenses'>
      <Chart year={filteredYear} expenses={props}/>
      <ExpenseFilter props={props} onChangeFilter={handleFilterChange}/>  
       {filteredList.length=== 0 ? <p className='expenses-list__fallback'> No Expenses found</p> :
        filteredList.map(filteredList=>(<ExpenseItem key={filteredList.id} title={filteredList.title} amount={filteredList.amount} date={filteredList.date}/>)
       )
       }   
    
    </Card>
  )
}

export default ExpenseList;
