import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import MonthlyExpense from './components/MonthlyExpense';
import Login from './components/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContainer from './components/MainContainer';




function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    console.log("hello sam")
    fetch("http://localhost:9292/user")
    .then (res => res.json())
    .then(console.log)
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
