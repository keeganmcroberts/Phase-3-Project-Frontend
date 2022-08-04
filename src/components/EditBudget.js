import { useState } from "react";
import {Link} from "react-router-dom"


function EditBudget({setDisplayState, logout}){
 const [budgetState, setBudgetState] = useState("")





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
                    event.preventDefault() })}>

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