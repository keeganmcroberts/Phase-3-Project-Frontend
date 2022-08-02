import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch("")
    .then (res => res.json())
    .then(console.log)
  }, [])








}





export default App;
