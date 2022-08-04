import EditExpense from "./EditExpense";
import MonthlyExpense from "./MonthlyExpense";
import {useState, useEffect} from "react";
import EditBudget from "./EditBudget";


function MainContainer({users, logout, currentUser}){
const [displayState, setDisplayState] = useState("monthlyExpenses")
const [newExpenses, setNewExpenses] = useState([])
const [allExpenses, setAllExpenses] = useState([])

console.log("currentUser", currentUser)

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
        setNewExpenses([newExpense, ...newExpenses])
    }

    function receiveSearchValue(searchValue) {  
        
        let resultOfSearch = currentUser.expenses.filter((eachExpense) => {
                if (eachExpense.expense_name.toLowerCase().includes(searchValue.toLowerCase()))
                return (eachExpense)
            })
            console.log("result of search", resultOfSearch)
        setAllExpenses(resultOfSearch)
    }

    console.log(currentUser.expenses, "hi")

    // function handleRemoveClick() {
    //     fetch(`http://localhost:9292/expenses/${id}`, {
    //       method: "DELETE",
    //     });
    //   }

    // handleRemoveClick={handleRemoveClick}

    return (
        <div className="mainContainerClass">
            {displayState === "editExpense" ? <EditExpense receiveSearchValue={receiveSearchValue} receiveNewExpense={receiveNewExpense} setDisplayState={setDisplayState}/> : null}
            {displayState === "monthlyExpenses" ? <MonthlyExpense currentUser={currentUser} logout={logout} users={users} setDisplayState={setDisplayState}/> : null}
            {displayState === "editBudget" ? <EditBudget setDisplayState={setDisplayState}/> : null }
        </div>
    )
}

export default MainContainer;