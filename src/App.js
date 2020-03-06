import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FitnessContext from './context/FitnessContext'
import login from './components/login';
import PrivateRoute from './components/PrivateRoute';
import FitnessdashCli from './components/FitnessdashCli';
import InstructorDash from './components/InstructorDash'
import Navigation from './components/Header';
import SignUp from './components/Signup';
import './App.css';

// #F5F5F5 white greenish color
// #8DB48E minty/khaki color
// #4D724D dark forest green

function App() {
  const [events, setEvents] =useState([])
  return (

    <Router>
      <FitnessContext.Provider value={{events, setEvents}}>
    <div className="App">
      <Navigation/>
     {/* <h1>Anywhere Fitness</h1> */}
     <Route exact path="/" component={login} />

     <Route path="/SignUp" component={SignUp}/>

     <PrivateRoute exact path="/protected" component={InstructorDash} />

     <PrivateRoute exact path='/student' component={FitnessdashCli}/>
          
    </div>
    </FitnessContext.Provider>
    </Router>
    
    
  );
}

export default App;

