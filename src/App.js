import React, { useState } from "react";
import { BrowserRouter as Router, Route,Switch,Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from './components/BubblePage'

import Login from "./components/Login";
import "./styles.scss";

function App() {

  const logout = () =>{
    localStorage.removeItem('token');
  }
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={logout} data-testid="logoutButton" href="#">logout</a>
        </header> 
        <Switch>
        <PrivateRoute exact path='/protectedbubble' component={BubblePage} />
        <Route exact path="/" component={Login} />
        <Route exact path='/login' component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.