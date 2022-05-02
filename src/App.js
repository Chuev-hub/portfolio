import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
function App(){
    return (
     
     
    
      <Router>
         <div className="App">
         <Switch>
           <Route exact path="/" component={Home}/>
           <Route   path="/h" >
             <div>govno</div>
           </Route>
          </Switch>
          </div>
      </Router>

    
    );
  }
    


export default App;