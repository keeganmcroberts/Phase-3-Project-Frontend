import { useState } from "react";


function MonthlyExpense ({setDisplayState}) {
const [weeklyExpenseListState, setWeeklyExpenseListState] = useState(true)
const [monthlyExpenseListState, setMonthlyExpenseListState] = useState(true)

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
            <button className="navButton3" >Logout</button>
            <h2>Welcome User!</h2>
            <br/>
            <br/>
            <h3>Toggle Weekly/Monthly Expenses</h3>
            <button onClick={ToggleWeeklyExpense}>Weekly Expenses</button>(Put toggle function on these) <button onClick={ToggleMonthlyExpense}>Monthly Expenses</button>
            <div>↓Some Component with data Goes Below↓</div>
            {/* {weeklyExpenseListState ? "some component with expense list from data" : null} 
            {monthlyExpenseListState ? "some component with monthly expense list from data" : null}   */}
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