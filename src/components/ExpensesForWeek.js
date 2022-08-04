function ExpensesForWeek ({users}){



    users.map((eachUser)=>{
        return(
           <li>{eachUser.first}</li>
        )



    })
}
export default ExpensesForWeek;