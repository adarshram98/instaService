import logo from './logo.svg';
import Header from './Components/Header'
import{useEffect} from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomerLanding from './Components/CustomerLanding';
import Service from './Components/ServicePage/Service'
import {db} from './firebase'
import { useStateValue } from './StateProvider';
import Login from './Components/Login/Login'
function App() {
  const [{jobs},dispatch] = useStateValue()
  // const [jobs,setJobs]=use
  // useEffect(() => {
  //   db.collection('Jobs').onSnapshot(snap=>{
  //     dispatch({
  //       action:"ADD_TO_JOBS",
  //       jobs:snap
  //     })
  //   })
  //   return () => {
      
  //   }
  // }, [])
  return (
   
    <Router>
    <div className="app">
      <Switch>
        <Route path="/business">
          <h2>Business </h2>
        </Route>
        <Route path="/customer">
          <CustomerLanding></CustomerLanding>
        </Route>
        <Route path="/service">
          <Service></Service>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/">
          <Header></Header>
          <Home></Home>
        </Route>
      
      </Switch>
    </div>
  </Router>
        

    
  );
}

export default App;
