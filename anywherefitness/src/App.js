import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import FitnessContext from './context/FitnessContext'
import Login from './components/login';
import PrivateRoute from './components/PrivateRoute';
import FitnessdashCli from './components/FitnessdashCli';
import InstructorDash from './components/InstructorDash'
import './App.css';
import Navigation from './components/Header';
import SignUp from './components/SignUp';
import Footer from './components/Footer';


// #F5F5F5 white greenish color
// #8DB48E minty/khaki color
// #4D724D dark forest green

function App() {
  const [events, setEvents] =useState([])
  return (

    <Router>
      <FitnessContext.Provider value={{events, setEvents}}>
    <div className="App">
     {/* <h1>Anywhere Fitness</h1> */}

     <Navigation /> 

        <Switch>
          <PrivateRoute exact path="/protected" component={InstructorDash} />
          <PrivateRoute exact path='/student' component={FitnessdashCli}/>
            <Route exact path="/login" component={Login} />
            <Route path="/SignUp" component={SignUp}/>
        </Switch>
     {/* <Footer /> */}

    </div>
    </FitnessContext.Provider>
    </Router>
    
    
  );
}

export default App;

