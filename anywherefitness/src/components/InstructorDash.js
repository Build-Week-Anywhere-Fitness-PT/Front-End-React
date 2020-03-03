import React, {useState, useEffect, useContext} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import FitnessContext from '../context/FitnessContext'
import GetClasses from '../classes/GetClasses'
import styled from 'styled-components';

const C = styled.div `
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 20%;
margin: 0 auto;
padding: 10px;
border: 3px solid black;
`

function Instructordash(props) {

const [classes, setClasses] = useState([])
//implement a search functionality
    useEffect(()=>{
        axiosWithAuth()
        .get('/api/category', classes)
        .then(res =>{
            console.log(res)
            setClasses(res.data)
        })
        .catch(err =>{
            console.log(err)
        });
    }, []);

    
    

    return(
        
        <div>
            <h1>Anywhere Fitness Instructor</h1>
            <div className='user'> Welcome back {localStorage.getItem('instructorID')}</div>
          <h2>My classes: </h2>
          
          {classes.map(classes => 
          
          <div key ={classes.id}> 
          <C>
              <br/>
              <h4>Workout: <p>{classes.name}</p></h4>
              <h5>Description: <p>{classes.description}</p></h5>
              </C>
          </div>)}
          <GetClasses/>
          
        </div>
    )
}
export default Instructordash;

