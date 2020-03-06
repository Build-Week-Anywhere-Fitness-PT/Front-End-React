import React, {useState, useEffect, useContext} from 'react';
import FitnessContext from '../context/FitnessContext'
import axiosWithAuth from '../utils/axiosWithAuth';
import UpdateClasses from './UpdateClasses';
import styled from 'styled-components';

const Boxes = styled.div `
display: flex;
font-size: 15px;
flex-direction: column;
flex-wrap: wrap;
justify-content: inherit;
border: 5px solid black;
width: 50%;

margin: auto;
padding: 5px;
`

//THIS IS FOR THE INSTRUCTOR TO CREATE A NEW CLASS
const GetClasses = () => {
    const {events, setEvents} = useContext(FitnessContext);
    const [classes, setClasses] = useState([])
    const [classForm, setClassForm] =useState({
    title:'',
    instructorId:'',
    categoryId:''
})

const handleChange = e =>{
    setClassForm({...classForm, [e.target.name]: e.target.value})
    
}

useEffect(()=>{
    axiosWithAuth()
    .get('/api/classes', classes)
    .then(res =>{
        console.log(res)
        setClasses(res.data)
    })
    
    .catch(err =>{
        console.log(err)
    });
}, []);

const handleSubmit = (e) =>{
        e.preventDefault();
        axiosWithAuth()
        .post('/api/classes', classForm)
        .then(res =>{
            setClassForm ({
            title:'',
            instructorId:'',
            categoryId:''
            })
            setEvents([...events, res.data])
            setClasses([...classes, res.data])
        })
        .catch(err => {
            console.log(err)
        })
    
}




    const handleDelete = id =>{
    axiosWithAuth()
    .delete(`/api/classes/${id}`)
    .then( res =>{
        console.log(res)
        setEvents(events.filter(item => item.id !== id))
        setClasses(classes.filter(item => item.id !== id))
        setClassForm(classForm.filter(item => item.id !== id))
    })
}
//SET STATE TO RESPONSE

    return(
        <div className='classes'>
            <h2>Class I've created</h2>
            <Boxes>
                {classes.map(cf=>
          <div key ={cf.id}>
              <br/>
              <h4>Workout: <p>{cf.title}</p></h4>
          <h4>Instructor Id: <p>{cf.instructorId}</p></h4>
          <h4>Category Id: <p>{cf.categoryId}</p></h4>
          <button onClick ={() => handleDelete(cf.id)}>Delete</button>
          <UpdateClasses id={cf.id} updateInfo={classForm}/>
          </div>)}
          </Boxes>
          <form onSubmit={handleSubmit}>
                <h5> Add a Class</h5>
                <input type='text'
                name='title'
                placeholder='Class'
                value={classForm.title}
                onChange={handleChange}
                />
                <br/>
                <input type='text'
                name='instructorId'
                placeholder='Instructor'
                value={classForm.instructorId}
                onChange={handleChange}
                />
                <br/>
                <input type='text'
                name='categoryId'
                placeholder='Category'
                value={classForm.categoryId}
                onChange={handleChange}
                />
                <br/>
               
                <br/>
                
                <button type='submit'>Add new class</button>
            </form>
            
        </div>
    )
}
export default GetClasses;