import React, {useState, useEffect, useContext} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import FitnessContext from '../context/FitnessContext'
import GetClasses from '../classes/GetClasses'
import styled from 'styled-components';

const Buttonz = styled.button `
textDecoration: 'none',
        color: 'black',
        border: '2px solid #636363',
        borderRadius: '5px',
        padding: '10px 25px',
        backgroundColor: '#AEEA4F'
`

function Instructordash(props) {
    const {events, setEvents}= useContext(FitnessContext)
const [category, setCategory] = useState({})
const [info, setInfo] =useState([]);
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
// const [addClass, setAddClass] =useState(false)


    useEffect(()=>{
        axiosWithAuth()
        .post('/api/category', category)
        .then(res =>{console.log('data', res.data)
        localStorage.setItem('events', res.data);
        setCategory(category)
        setInfo(res.data.category)
        })
        .catch(err=>{
            console.log('invalid', err)})
    }, []);

    const handleDelete = id =>{
        axiosWithAuth()
        .delete('/api/classes:Id')
        .then( res =>{
            console.log(res)
            setEvents(events.filter(item => item.id !== id))
        })
    }

    return(
        
        <div>
            <h1>Anywhere Fitness Instructor</h1>
            <div className='user'> Welcome back {localStorage.getItem('instructorID')}</div>
          <h2>My classes: </h2>
          {classes.map(classes => 
          <div key ={classes.id}>
              <br/>
              <h4>Workout: <p>{classes.name}</p></h4>
              <h5>Description: <p>{classes.description}</p></h5>
              
              
          </div>)}
          <GetClasses/>
          <button onClick ={() => handleDelete(events.id)}>Delete</button>
            
        </div>
    )
}
export default Instructordash;

