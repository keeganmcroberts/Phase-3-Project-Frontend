import { useState } from "react";
import ExpensesForMonth from "./ExpensesForMonth";
import ExpensesForWeek from "./ExpensesForWeek";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import {Link} from "react-router-dom"
import ExpenseGraph from "./ExpenseGraph";

function MonthlyExpense ({setDisplayState, users, logout, currentUser}) {
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
            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                <span></span>
                </label>

                <ul class="menu__box">
                <li><a className="navButton1" onClick={()=>setDisplayState("editExpense")}>Add/Remove Expenses</a></li>
                <li><a  className="navButton2" onClick={()=>setDisplayState("editBudget")}>Edit Budget</a></li>
                <li><a class="menu__item" href="#">Team</a></li>
                <li><a class="menu__item" href="#">Contact</a></li>
                <li><a class="menu__item" href="#">Twitter</a></li>
                    </ul>
                </div>
            <button className="navButton1" onClick={()=>setDisplayState("editExpense")}>Add/Remove Expenses</button>
            <button className="navButton2" onClick={()=>setDisplayState("editBudget")}>Edit Budget</button>
            <Link onClick={logout} className="logoutLink" to="/login">Logout</Link> 
            <h2>Welcome User!</h2>
            <br/>
            <br/>
            <h3>View Expenses Here</h3>
             <button onClick={ToggleMonthlyExpense}>Monthly Expenses</button>
            {weeklyExpenseListState ? <ExpensesForWeek users={users}/> : null} 
            {monthlyExpenseListState ? <ExpensesForMonth currentUser={currentUser}/> : null}  
            <br/> 
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div></div>
            <h3>Budget Breakdown</h3>
            <ExpenseGraph/>
            <br/>
            <br/>
            <h4>Daily Money Saving Tip Here</h4>





        </div>
    </div>


)
}

export default MonthlyExpense;