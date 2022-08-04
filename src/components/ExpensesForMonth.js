function ExpensesForMonth({currentUser}){
    return(
        <div>

        {currentUser.expenses.map((eachExpense)=>{
            return(
            <div>
                <h4>Date: {eachExpense.date}</h4> 
                <h4>Amount: ${eachExpense.amount}</h4>
                
                
            </div>
            )
        })}


        </div>
    )
}

export default ExpensesForMonth;