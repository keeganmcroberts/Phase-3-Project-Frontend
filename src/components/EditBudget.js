import { useState } from "react";
import {Link} from "react-router-dom"



function EditBudget({setDisplayState, currentUser, logout}){

 const [budgetState, setBudgetState] = useState("")

function receiveNewBudget(newBudget) {
    fetch(`http://localhost:9292/${currentUser.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newBudget)
    }) 
    setBudgetState(newBudget)
}

 return (
    <div className="editBudgetBackground">
        <div className="editBudgetCard">
            <button className="navButton1" onClick={()=>setDisplayState("monthlyExpenses")}>Home</button>
            <button className="navButton2" onClick={()=>setDisplayState("editExpense")}>Add/Remove Expenses</button>
            <Link onClick={logout} className="logoutLink" to="/login">Logout</Link> 
            <h2>Edit Budget Here</h2>
                <br/>
                <br/>
                <br/>
                <form className="inputIncome" onSubmit={((event) => {
                    event.preventDefault()
                    let newBudget = {
                        salary: budgetState
                        }
                    receiveNewBudget(newBudget)})}>
                    <input 
                    className="incomeInput"
                    placeholder="Monthly Budget: $$$"
                    value={budgetState} 
                    onChange={(event)=> setBudgetState(event.target.value)}/>
                <br/>
                <h4>Save Changes?</h4>
                <br/>
                <br/>
                <br/>
                <button type="submit" id="saveButton">Save</button>         <button id="cancelButton">Cancel</button>
                </form>
                
                
                

        </div>
    </div>
    )


}
export default EditBudget;