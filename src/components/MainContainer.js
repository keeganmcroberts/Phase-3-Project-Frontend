import EditExpense from "./EditExpense";
import MonthlyExpense from "./MonthlyExpense";
import {useState, useEffect} from "react";
import EditBudget from "./EditBudget";


function MainContainer({users, logout}){
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
       

    // function handleingtheSearch(searchBarInput){
    //     let resultofSearch= "state".filter((whatItype)=> {
    //       if(whatItype."data".toLowerCase().includes(searchBarInput.toLowerCase())){
    //         return whatItype
    //       }else if (whatItype."data".toLowerCase().includes(searchBarInput.toLowerCase())){
    //         return whatItype
    //       }
    //     })
    //     "setState"(resultofSearch)
    
    //   }







    return (
        <div className="mainContainerClass">
            {displayState === "editExpense" ? <EditExpense receiveExpenseToRemove={receiveExpenseToRemove} receiveNewExpense={receiveNewExpense} setDisplayState={setDisplayState}/> : null}
            {displayState === "monthlyExpenses" ? <MonthlyExpense logout={logout} users={users} setDisplayState={setDisplayState}/> : null}
            {displayState === "editBudget" ? <EditBudget setDisplayState={setDisplayState}/> : null }
        </div>
    )
}

export default MainContainer;