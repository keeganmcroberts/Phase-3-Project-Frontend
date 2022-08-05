import { useState } from "react";
import { Link } from "react-router-dom"



function EditBudget({ setDisplayState, currentUser, logout }) {

    const [budgetState, setBudgetState] = useState("")

    function receiveNewBudget(newBudget) {
        fetch(`http://localhost:9292/${currentUser.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBudget)
        })
        setBudgetState(newBudget)
    }

    return (
        <div className="editBudgetBackground">
            <div className="editBudgetCard">
                <div class="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>

                    <ul class="menu__box">
                        <li><a className="navButton1" onClick={() => setDisplayState("monthlyExpenses")}>Home</a></li>
                        <li><a className="navButton1" onClick={() => setDisplayState("editExpense")}>Add/Remove Expenses</a></li>
                        <li><Link onClick={logout} className="logoutLink" to="/login">Logout</Link>
                        </li>

                    </ul>
                </div>
               

                <h2>Edit Budget Here</h2>
                <br />
                <form onSubmit={((event) => {
                    event.preventDefault()
                    let newBudget = {
                        salary: budgetState
<<<<<<< HEAD
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
=======
                    }
                    receiveNewBudget(newBudget)
                })}>
                    <input className="inputIncome"
                        placeholder="Monthly Budget: $$$"
                        value={budgetState}
                        onChange={(event) => setBudgetState(event.target.value)} />
>>>>>>> 0a18433d0dd81bf82b347949926a7c72d4b21a03
                </form>
                    <h3>Save Changes?</h3>
                    <br />
                    <br />
                    <br />
                    <button type="submit" id="saveButton">Save</button>         
                    <button id="cancelButton">Cancel</button>

            </div>
        </div>
    )


}
export default EditBudget;