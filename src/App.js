import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import NavBar from "./Components/NavBar";
import Project from "./Components/Project";
function App(){
    return (
     <>
    
    
      <Router>
      <NavBar></NavBar>
         <div className="App">
         <Switch>
           <Route exact path="/" component={Home}/>
           <Route   path="/projects" component={Projects}/>
           <Route   path="/project/:id" component={Project}/>
           <Route   path="/contact" component={Contact}/>
           <Route render={()=><div>Page not found</div>} />
          </Switch>
          </div>
      </Router>
      </>
    
    );
  }
    


export default App;