import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import MonthlyExpense from './components/MonthlyExpense';
import Login from './components/Login';

import Footer from './components/Footer';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

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
      <div className="appContainerClass">
        <Header className="appHeader"/>
        <div className="app">

          {/* <Login className="appLogin"/> this will need a 'home' route  */}
          <MainContainer className ="mainContainer"/>

        </div>
        <Footer className="appFooter"/>
      </div>
    )






}





export default App;
