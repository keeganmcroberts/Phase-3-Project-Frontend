import {useState, useEffect} from "react";

import {Link} from "react-router-dom"

function EditExpense ({receiveNewExpense, setDisplayState, receiveSearchValue, currentUser, handleRemoveClick, logout}) {

const [priceInput, setPriceInput] = useState("")
const [categoryInput, setCategoryInput] = useState("")
const [nameInput, setNameInput] = useState("")
const [dateInput, setDateInput] = useState("")
const [currentUserExpenses, setCurrentUserExpenses] = useState([])


    useEffect( ()=>{
            if(currentUser.id){
                fetch(`http://localhost:9292/my_expenses/${currentUser.id}`)
                .then (res => res.json())
                .then(fetchedUserExpenses =>{ console.log(fetchedUserExpenses)
                    setCurrentUserExpenses( fetchedUserExpenses )
                })
            }else console.log("No ones logged in")
            
        }, 
    [])
  

console.log("Loggedin",currentUser)


    return (
        <div className="editExpenseClass">
            <button className="navButton1" onClick={()=>setDisplayState("monthlyExpenses")}>Home</button>
            <button className="navButton2" onClick={()=>setDisplayState("editBudget")}>Edit Budget</button>
            <Link onClick={logout} className="logoutLink" to="/login">Logout</Link> 
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
                            name: nameInput,
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
                            <option value="bills">Bills</option>

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
                    placeholder="Search by Name..."
                    onChange={(e)=> receiveSearchValue(e.target.value)}
                    />
                    <button id="removeButton" onClick={(e)=>{handleRemoveClick()}}>Remove</button>
                </div>
        </div>
    )
}

export default EditExpense;