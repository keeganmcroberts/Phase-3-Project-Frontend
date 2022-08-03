import EditExpense from "./EditExpense";
import MonthlyExpense from "./MonthlyExpense";
import EditBudget from "./EditBudget";
import { useState } from "react";


function MainContainer(){
const [displayState, setDisplayState] = useState("monthlyExpenses")

console.log(displayState)

    return (
        <div className="mainContainerClass">
            {displayState === "editExpense" ? <EditExpense setDisplayState={setDisplayState}/> : null}
            {displayState === "monthlyExpenses" ? <MonthlyExpense setDisplayState={setDisplayState}/> : null}
            {displayState === "editBudget" ? <EditBudget setDisplayState={setDisplayState}/> : null }
        </div>
    )
}

export default MainContainer;