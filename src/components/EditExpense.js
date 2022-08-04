import {useState} from "react";
function EditExpense ({receiveNewExpense, setDisplayState}) {
const [priceInput, setPriceInput] = useState("")
const [categoryInput, setCategoryInput] = useState("")
const [nameInput, setNameInput] = useState("")
const [dateInput, setDateInput] = useState("")



    return (
        <div className="editExpenseClass">
            <button className="navButton1" onClick={()=>setDisplayState("monthlyExpenses")}>Home</button>
            <button className="navButton2" onClick={()=>setDisplayState("editBudget")}>Edit Budget</button>
            <button className="navButton3" >Logout</button>
            <br/>
            <br/>
            <br/>
             <h2>New Expense</h2> 
                    <form
                        onSubmit={(e)=>{
                            e.preventDefault()
                        let newExpense = {
                            amount: priceInput,
                            category_name: categoryInput,
                            date: dateInput,
                        }
                        receiveNewExpense(newExpense)
                        }}>
                        <input
                        type="text"
                        name="date"
                        placeholder="Date"
                        value={dateInput}
                        onChange={(e)=>{setDateInput(e.target.value)}}
                        />
                        <input
                        type="text"
                        name="expense"
                        placeholder="Price"
                        value={priceInput}
                        onChange={(e)=>{setPriceInput(e.target.value)}}
                        />
                        <input
                        type="text"
                        name="nameOfExpense"
                        placeholder="Name"
                        value={nameInput}
                        onChange={(e)=>{setNameInput(e.target.value)}}
                        />
                        <select 
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={categoryInput}
                        onChange={(e)=>{setCategoryInput(e.target.value)}}
                        >
                            <option value="category">Category</option>
                            <option value="rent">Rent</option>
                            <option value="food">Food</option>
                            <option value="clothes">Clothes</option>
                            <option value="vacation">Vacation</option>
                            <option value="gas">Gas</option>
                            <option value="doctorBill">Doctor Bill</option>
                            <option value="waterBill">Water Bill</option>
                            <option value="powerBill">Power Bill</option>
                            <option value="internetBill">Internet Bill</option>
                            <option value="phoneBill">Phone Bill</option>
                            
                        </select> 
                        <input
                        type="submit"
                        name="submit"
                        value="Save"
                        id="saveButton"
                        />
                    </form>
            <br/>
            <br/>
            <br/>
            <h2>Edit Expense</h2>
                <div className="expenseSearchBar">
                    <input 
                    className="searchBar"
                    type="text"
                    placeholder="Search by Category..."
                    // onChange={(synthEvent)=> handleingtheSearch(synthEvent.target.value)}
                    />
                </div>
                <button id="removeButton">Remove</button>
        </div>
    )
}

export default EditExpense;