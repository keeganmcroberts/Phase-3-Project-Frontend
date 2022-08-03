import {useState} from "react";

function EditExpense ({setDisplayState}) {
    return (
        <div className="editExpenseClass">
            <button className="navButton1" onClick={()=>setDisplayState("monthlyExpenses")}>Home</button>
            <button className="navButton2" onClick={()=>setDisplayState("editBudget")}>Edit Budget</button>
            <button className="navButton3" >Logout</button>
             <h2>New Expense</h2> 
                    <form>
                        <input
                        type="text"
                        name="insertPrice"
                        placeholder="Insert Price"
                        />
                        <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        />
                    </form>
            <button id="saveButton">Save</button>

            <h2>Edit Expense</h2>
                <div className="expenseSearchBar">
                    <input 
                    className="searchBar"
                    name="searchBar"
                    placeholder="Search"
                    // onChange={(e)=>{getSearchValues(e.target.value)}}
                    />
                </div>
                <button id="removeButton">Remove</button>
        </div>
    )
}

export default EditExpense;