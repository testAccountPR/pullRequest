import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Form from './Components/Form';

function App() {
  return (
    <>
    <Router>
    <div>
    <Navbar></Navbar>
    <Switch>
      <Route exact path="/">
      <Form heading="Enter text to analyze below"></Form>
      </Route>
      <Route exact path="/about">
         <About></About>
      </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
