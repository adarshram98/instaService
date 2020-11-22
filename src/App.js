import logo from './logo.svg';
import Header from './Components/Header'
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
   
    <Router>
    <div className="app">
      <Switch>
        <Route path="/business">
          <h2>Business </h2>
        </Route>
        <Route path="/customer">
          
          <h2>Customer</h2>
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
