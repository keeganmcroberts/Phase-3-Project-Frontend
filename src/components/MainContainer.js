import EditExpense from "./EditExpense";
import MonthlyExpense from "./MonthlyExpense";
import {useState, useEffect} from "react";
import EditBudget from "./EditBudget";


function MainContainer(){
const [displayState, setDisplayState] = useState("monthlyExpenses")
const [expenses, setNewExpenses] = useState([])
const [allExpenses, setAllExpenses] = useState([])


useEffect(() => {
    fetch('http://localhost:9292/expenses')
    .then(res=>res.json())
    .then(data=>{
        setNewExpenses(data)
        setAllExpenses(data)
})
}, [])

    function receiveNewExpense(newExpense) {
        fetch("http://localhost:9292/expenses", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newExpense)
        })
        setNewExpenses([newExpense, ...expenses])
    }

    function receiveExpenseToRemove(searchValue) {
        let resultOfSearch = allExpenses.filter(
            (eachExpense) => {
                if (eachExpense.name.toLowerCase().includes(searchValue.toLowerCase()))
                return (eachExpense)
            })
        setAllExpenses(resultOfSearch)
    }
       

    return (
        <div className="mainContainerClass">
            {displayState === "editExpense" ? <EditExpense receiveExpenseToRemove={receiveExpenseToRemove} receiveNewExpense={receiveNewExpense} setDisplayState={setDisplayState}/> : null}
            {displayState === "monthlyExpenses" ? <MonthlyExpense setDisplayState={setDisplayState}/> : null}
            {displayState === "editBudget" ? <EditBudget setDisplayState={setDisplayState}/> : null }
        </div>
    )
}

export default MainContainer;