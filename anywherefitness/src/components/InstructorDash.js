import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {NavLink} from 'react-router-dom';
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
const [category, setCategory] = useState({})
const [info, setInfo] =useState([]);

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
            console.log('invalid', err)
        })
    }, []);

    return(
        
        <div>
            <NavLink to='/'>Anywhere 
            <span>Fitness</span>
            </NavLink>
            <div className='user'> Welcome back {localStorage.getItem('instructorID')}</div>
            <section>
        <h1>My Classes</h1>
        <GetClasses/>
            {info.map(classes =>
                <div key ={category.id}>
                    
                    <h3>Class: {category.title}</h3>
                    <h4>Age: {category.instructorId}</h4>
                    {/* <h5>Email: {friend.email}</h5> */}
                   
                    {/* <button onClick={() => handleDelete(person.id)}>Remove Friend</button> */}
                </div>
            )}
        </section>
            
        </div>
    )
}
export default Instructordash;

