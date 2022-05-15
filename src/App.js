import React, {Supspense, lazy} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home"
import About from "./routes/About";
import Navigation from "./routes/Navigation";

import "./App.css";

class App extends React.Component{
 state={
   pathId: ""

  }
  render(){
    
  return (
  <div>
  <Router >
    <Navigation />
    <Switch>
      <Route exact={true} path="/about" component={About} />
      <Route exact={true} path="/" component={Home} />
    </Switch>
  </Router>
  </div>
  )
}
}

export default App;