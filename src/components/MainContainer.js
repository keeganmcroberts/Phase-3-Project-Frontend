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
        console.log("new expense:", newExpense)
        fetch("http://localhost:9292/expenses", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newExpense)

        }) 

        setAllExpenses([newExpense, ...allExpenses])
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

    function handleRemoveClick(eachExpense) {
        fetch(`http://localhost:9292/my_expenses/${eachExpense.id}`, {
          method: "DELETE",
        })
        .then((r) => r.json())
        .then((data)=> 
        console.log("Its been deleted!", data)
        )

        let resultOfFilter = allExpenses.filter( (eachExpenseObj)=> {
            if( eachExpenseObj.id !== eachExpense.id){
                return eachExpenseObj
            }
        })
        setAllExpenses( [...resultOfFilter])
      }

    

    return (
        <div className="mainContainerClass">
            {displayState === "editExpense" ? <EditExpense currentUser={currentUser} receiveSearchValue={receiveSearchValue} receiveNewExpense={receiveNewExpense} setDisplayState={setDisplayState} handleRemoveClick={handleRemoveClick} /> : null}
            {displayState === "monthlyExpenses" ? <MonthlyExpense currentUser={currentUser} logout={logout} users={users} setDisplayState={setDisplayState}/> : null}
            {displayState === "editBudget" ? <EditBudget setDisplayState={setDisplayState} currentUser={currentUser}/> : null }
        </div>
    )
}

export default MainContainer;