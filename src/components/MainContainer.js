import EditExpense from "./EditExpense";
import MonthlyExpense from "./MonthlyExpense";


function MainContainer(){
    return (
        <div className="mainContainerClass">
            <EditExpense/>
            <MonthlyExpense/>
        </div>
    )
}

export default MainContainer;