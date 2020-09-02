import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
