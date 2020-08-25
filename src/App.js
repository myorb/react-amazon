import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Checkout</h1>
          </Route>
          <Route path="/">
            <Header></Header>
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
