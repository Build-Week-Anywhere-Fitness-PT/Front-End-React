import React, {useState, useEffect, useContext} from 'react';
import FitnessContext from '../context/FitnessContext'
import axiosWithAuth from '../utils/axiosWithAuth';


//THIS IS FOR THE INSTRUCTOR TO CREATE A NEW CLASS
const GetClasses = () => {
    const {events, setEvents} = useContext(FitnessContext);
    const [classes, setClasses] = useState({
        title:'',
        instructorId:'',
        categoryId:'',

})
const handleChange = e =>{
    setClasses({...classes, [e.target.name]: e.target.value})
}
const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(classes)
    axiosWithAuth()
    
    .post('/api/classes', classes)
    .then(res =>{
        setClasses ({
        title:'',
        instructorId:'',
        categoryId:'',
        })
        setEvents([...events, res.data])
    })
    .catch(err => {
        console.log(err)
    })
    
}
//SET STATE TO RESPONSE

    return(
        <div className='classes'>
            <form onSubmit={handleSubmit}>
                <h3> Add a Class</h3>
                <input type='text'
                name='title'
                placeholder='Class'
                value={classes.title}
                onChange={handleChange}
                />
                <br/>
                <input type='text'
                name='instructorId'
                placeholder='Instructor'
                value={classes.instructorId}
                onChange={handleChange}
                />
                <br/>
                <input type='text'
                name='categoryId'
                placeholder='Category'
                value={classes.categoryid}
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