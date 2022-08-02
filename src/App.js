import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import MonthlyExpense from './components/MonthlyExpense';

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    console.log("hello sam")
    fetch("http://localhost:9292/user")
    .then (res => res.json())
    .then(console.log)
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
