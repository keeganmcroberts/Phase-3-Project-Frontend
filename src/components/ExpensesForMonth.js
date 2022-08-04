import { VictoryPie } from "victory-pie";
import React from "react";

const myData = [
    { x: "Group A", y: 900 },
    { x: "Group B", y: 400 },
    { x: "Group C", y: 300 },
  ];
  
  const App = () => {
    return (
      <div>
        <VictoryPie
          data={myData}
          colorScale={["blue", "yellow", "red"]}
          radius={100}
        />
      </div>
    );
  };
  



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