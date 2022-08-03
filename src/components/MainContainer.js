import EditExpense from "./EditExpense";
import MonthlyExpense from "./MonthlyExpense";
import {useState, useEffect} from "react";


function MainContainer(){
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
            <EditExpense receiveNewExpense={receiveNewExpense} />
            <MonthlyExpense/>
        </div>
    )
}

export default MainContainer;