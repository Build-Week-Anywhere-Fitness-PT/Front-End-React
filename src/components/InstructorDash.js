import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import FitnessContext from '../context/FitnessContext'
import GetClasses from '../classes/GetClasses'
import styled from 'styled-components';

const C = styled.div `
display: flex;

font-size: 15px;
flex-direction: column;
flex-wrap: wrap;
justify-content: inherit;
width: 50%;

margin: auto;
padding: 5px;
border: 5px solid black;
`
const Back = styled.div `


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
        <Back>
        <div>
            <h1>Instructor</h1>
            <div className='user'> Welcome back {localStorage.getItem('instructorId')}</div>
            <h2>My categories: </h2>
            <C>
          
          
          {classes.map(classes => 
          
          <div key ={classes.id}> 
          
              <br/>
              <h4>Workout: <p>{classes.name}</p></h4>
              <h5>Description: <p>{classes.description}</p></h5>
              
          </div>)}
          </C>
          <GetClasses/>
          
        </div>
        </Back>
    )
}
export default Instructordash;

