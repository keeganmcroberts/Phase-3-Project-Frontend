import EditExpense from "./EditExpense";
import MonthlyExpense from "./MonthlyExpense";
import {useState, useEffect} from "react";


function MainContainer(){
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
            <EditExpense receiveNewExpense={receiveNewExpense} receiveExpenseToRemove={receiveExpenseToRemove} />
            <MonthlyExpense/>
        </div>
    )
}

export default MainContainer;