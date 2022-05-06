import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import NavBar from "./Components/NavBar";
function App(){
    return (
     <>
    
    
      <Router>
      <NavBar></NavBar>
         <div className="App">
         <Switch>
           <Route exact path="/" component={Home}/>
           <Route   path="/h" >
             <div>govno</div>
           </Route>
          </Switch>
          </div>
      </Router>
      </>
    
    );
  }
    


export default App;