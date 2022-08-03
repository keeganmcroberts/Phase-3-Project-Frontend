import EditExpense from "./EditExpense";
import MonthlyExpense from "./MonthlyExpense";
import {useState, useEffect} from "react";
import EditBudget from "./EditBudget";


function MainContainer(){
const [displayState, setDisplayState] = useState("monthlyExpenses")
const [expenses, setNewExpenses] = useState([])


useEffect(() => {
    fetch('http://localhost:9292/expenses')
    .then(res=>res.json())
    .then(data=>{setNewExpenses(data)})
}, [])

    function receiveNewExpense(newExpense) {
        fetch("http://localhost:9292/expenses", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newExpense)
        })
        setNewExpenses([newExpense, ...expenses])
    }

    // function receiveExpenseToRemove(removeExpense)
    //     fetch("http://localhost:9292/expenses", {
    //         method: 'DELETE'
    //     })


    return (
        <div className="mainContainerClass">
            {displayState === "editExpense" ? <EditExpense receiveNewExpense={receiveNewExpense} setDisplayState={setDisplayState}/> : null}
            {displayState === "monthlyExpenses" ? <MonthlyExpense setDisplayState={setDisplayState}/> : null}
            {displayState === "editBudget" ? <EditBudget setDisplayState={setDisplayState}/> : null }
        </div>
    )
}

export default MainContainer;