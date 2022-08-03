import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import MonthlyExpense from './components/MonthlyExpense';
import Login from './components/Login';

function App() {
  // console.log("Back")

  const [users, setUsers] = useState([])
  console.log("State of Our Users: ", users)

  useEffect( ()=>{
    fetch("http://localhost:9292/users")
    // fetch("http://localhost:9292/categories")
    // fetch("http://localhost:9292/expenses")
    .then (res => res.json())
    .then(fetchedUsers =>{ console.log(fetchedUsers)
      setUsers( fetchedUsers )
    })
  }, [])


    return (
      // <Container>
      //   <Header className="appHeader"/>
        <div className="app">
          {/* <Login/>
          <MainContainer/> */}
        
        </div>
        // <Footer className="appFooter"/>
      // </Container>
    )






}





export default App;
