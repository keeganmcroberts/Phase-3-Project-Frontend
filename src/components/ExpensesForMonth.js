import { VictoryPie } from "victory-pie";
import React from "react";

  

function ExpensesForMonth({currentUser}){
    return(
        <div >

        {currentUser.expenses.map((eachExpense)=>{
            return(
            <div className="homePageExpenseList">
                <h3>{eachExpense.expense_name}</h3>
                <h4>Date: {eachExpense.date}</h4> 
                <h4>Amount: ${eachExpense.amount}</h4>
                
                
            </div>
            )
        })}


        </div>
    )
}

export default ExpensesForMonth;