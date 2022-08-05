import './App.css';
import {useState, useEffect} from 'react';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { useNavigate } from "react-router-dom";

function App() {
  // console.log("Back")

  const [users, setUsers] = useState([])
  const [userToLogin, setUserToLogin] = useState({username:"", password:""})
  const [loggedInStatus, setLoggedInStatus] = useState(false)
  const [currentUser, SetCurrentUser] = useState({})
  const [expenses, setExpenses] = useState([])

  console.log("State of Our Users: ", users)
  console.log("User Logged in:", userToLogin)
  console.log("logged in status:", loggedInStatus) 
  console.log("state of expenses:", expenses ) 
  console.log("user expenses!!!!!:", currentUser.expenses)

  useEffect( ()=>{
    fetch("http://localhost:9292/users")
    .then (res => res.json())
    .then(fetchedUsers =>{ console.log(fetchedUsers)
      setUsers( fetchedUsers )
    })
  }, [])


  useEffect( ()=>{
    fetch("http://localhost:9292/allExpenses")
    .then (res => res.json())
    .then(fetchedExpenses =>{ console.log("fetched expenses:", fetchedExpenses)
      setExpenses( fetchedExpenses )
    })
  }, [])
  

  let navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation();                             
    
    fetch("http://localhost:9292/login", {
     
     method: 'POST',
     headers: {'Content-type': 'application/json'},
     body: JSON.stringify(userToLogin)
     })
     .then(res=>res.json())
     .then((userLogin)=>{
        if (userLogin.id){
          setLoggedInStatus(true)
          SetCurrentUser(userLogin)
        }
     })

     if (loggedInStatus )
     navigate("/home")
   };

   function logout(){
     setLoggedInStatus(false)
   }
  



  const handleUsernameLogin = (e)=>{
    setUserToLogin({...userToLogin, username: e.target.value})
  }

  const handlePasswordLogin = (e)=>{
    setUserToLogin({...userToLogin, password: e.target.value})
  }

    return (
      <div className="appContainerClass">
        <Header className="appHeader"/>
        <div className="app">
          <Routes>
            <Route path="/home" element={<MainContainer currentUser={currentUser} logout={logout} users={users} className ="mainContainer"/>}></Route>
            <Route path="/login" element={<Login className="appLogin" handleUsernameLogin={handleUsernameLogin} handlePasswordLogin={handlePasswordLogin} userToLogin={userToLogin} handleSubmit={handleSubmit}/>}></Route>
   
          </Routes>
        </div>
        <Footer className="appFooter"/>
      </div>
    )






}





export default App;
