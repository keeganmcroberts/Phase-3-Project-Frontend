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
              <div class="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>

                    <ul class="menu__box">
                        <li><a className="navButton1" onClick={() => setDisplayState("monthlyExpenses")}>Home</a></li>
                        <li><a className="navButton1" onClick={()=>setDisplayState("editBudget")}>Edit Budget</a></li>
                        <li><Link onClick={logout} className="logoutLink" to="/login">Logout</Link>
                        </li>

                    </ul>
                </div>
               
            {/* <button className="navButton1" onClick={()=>setDisplayState("monthlyExpenses")}>Home</button>
            <button className="navButton2" onClick={()=>setDisplayState("editBudget")}>Edit Budget</button>
            <Link onClick={logout} className="logoutLink" to="/login">Logout</Link>  */}
             <h2>New Investment</h2> 
            <br/>

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
                        <input className="input_form"
                        type="text"
                        name="date"
                        placeholder="Date"
                        value={dateInput}
                        onChange={(e)=>{setDateInput(e.target.value)}}
                        />
                        <input className="input_form"
                        type="text"
                        name="expense"
                        placeholder="Price"
                        value={priceInput}
                        onChange={(e)=>{setPriceInput(e.target.value)}}
                        />
                        <input className="input_form"
                        type="text"
                        name="nameOfExpense"
                        placeholder="Name"
                        value={nameInput}
                        onChange={(e)=>{setNameInput(e.target.value)}}
                        />
                        <select id="categories"
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
                        </form>
                        <input
                        type="submit"
                        name="submit"
                        value="Save"
                        id="saveExpenseButton"
                        />
                   
            <br/>
            <br/>
            <br/>
            <h2>Edit Investment</h2>
                <div className="expenseSearchBar">
                    <input 
                    className="searchBar"
                    type="text"
                    placeholder="Search by Name..."
                    onChange={(e)=> receiveSearchValue(e.target.value)}
                    />
                
                </div>
                <div >
                    {currentUser.expenses.map((eachExpense)=>{
                return(
                <div key={currentUser.id} className="homePageExpenseList">
                    <h3>{eachExpense.expense_name}</h3>
                    <h4>Date: {eachExpense.date}</h4> 
                    <h4>Amount: ${eachExpense.amount}</h4>
                    <button className="button" onClick={(e)=>{handleRemoveClick(eachExpense)}}>Remove</button>
                    
                </div>
                )
})}


</div>
        </div>
    )
}

export default EditExpense;