import {useState} from "react";

function EditExpense () {

    return (
        <div className="editExpenseClass">
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