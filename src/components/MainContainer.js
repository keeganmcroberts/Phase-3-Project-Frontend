import EditExpense from "./EditExpense";
import MonthlyExpense from "./MonthlyExpense";
import {useState, useEffect} from "react";
import EditBudget from "./EditBudget";


function MainContainer({users, logout, currentUser}){
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

    function receiveSearchValue(searchValue) {
        let resultOfSearch = currentUser.expenses.filter((eachExpense) => {
                if (eachExpense.name.toLowerCase().includes(searchValue.toLowerCase()))
                return (eachExpense)
            })
            console.log("result of search" ,resultOfSearch)
        setAllExpenses(resultOfSearch)
    }

    return (
        <div className="mainContainerClass">
            {displayState === "editExpense" ? <EditExpense receiveSearchValue={receiveSearchValue} receiveNewExpense={receiveNewExpense} setDisplayState={setDisplayState} /> : null}
            {displayState === "monthlyExpenses" ? <MonthlyExpense currentUser={currentUser} logout={logout} users={users} setDisplayState={setDisplayState}/> : null}
            {displayState === "editBudget" ? <EditBudget setDisplayState={setDisplayState}/> : null }
        </div>
    )
}

export default MainContainer;