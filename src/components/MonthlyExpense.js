import { useState } from "react";
import ExpensesForMonth from "./ExpensesForMonth";
import ExpensesForWeek from "./ExpensesForWeek";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import {Link} from "react-router-dom"

function MonthlyExpense ({setDisplayState, users, logout}) {
const [weeklyExpenseListState, setWeeklyExpenseListState] = useState(false)
const [monthlyExpenseListState, setMonthlyExpenseListState] = useState(false)

function ToggleMonthlyExpense() {
    setMonthlyExpenseListState(!monthlyExpenseListState)
}

function ToggleWeeklyExpense(){
    setWeeklyExpenseListState(!weeklyExpenseListState)
}

return (
    <div className="monthlyExpenseCardBackground">
        <div className="monthlyExpenseCard">
            <button className="navButton1" onClick={()=>setDisplayState("editExpense")}>Add Expenses</button>
            <button className="navButton2" onClick={()=>setDisplayState("editBudget")}>Edit Budget</button>
            <Link onClick={logout} className="logoutLink" to="/login">Logout</Link> 
            <h2>Welcome User!</h2>
            <br/>
            <br/>
            <h3>Toggle Weekly/Monthly Expenses</h3>
            <button onClick={ToggleWeeklyExpense}>Weekly Expenses</button> <button onClick={ToggleMonthlyExpense}>Monthly Expenses</button>
            {weeklyExpenseListState ? <ExpensesForWeek users={users}/> : null} 
            {monthlyExpenseListState ? <ExpensesForMonth/> : null}  
            <br/> 
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div></div>
            <h3>Compare Monthly Expenses (graph goes where Kurt is)</h3>
            <img className="expenseGraph" src="https://i.kym-cdn.com/photos/images/newsfeed/001/513/511/b18.png">
        
            </img>
            <br/>
            <br/>
            <h4>Daily Money Saving Tip Here</h4>





        </div>
    </div>


)
}

export default MonthlyExpense;