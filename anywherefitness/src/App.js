import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import FitnessContext from './context/FitnessContext'
import Login from './components/login';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

// STYLING HERE const Homepg = styled.div `

// `

function App() {
  const [fitness, setFitness] =useState()
  return (
    <Router>
      <FitnessContext.Provider value={{fitness, setFitness}}>
    <div className="App">
     <h1>Anywhere Fitness</h1>
     <Switch>
     {/* <PrivateRoute exact path="/protected" component={FitnessPage} /> */}
          <Route exact path="/" component={Login} />
        </Switch>
    </div>
    </FitnessContext.Provider>
    </Router>
    
  );
}

export default App;

