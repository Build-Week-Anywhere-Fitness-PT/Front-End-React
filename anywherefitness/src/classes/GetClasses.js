import React, {useState, useEffect, useContext} from 'react';
import FitnessContext from '../context/FitnessContext'
import axiosWithAuth from '../utils/axiosWithAuth';

const GetClasses = () => {
    const {events, setEvents} = useContext;
    const [classes, setClasses] = useState({
        title:'',
        instructorId:'',
        categoryId:'',
        scheduleTime:'',
        address:'',
        city:'',
        state:'',
        zipCode:''

})
const handleChange = e =>{
    setClasses({...classes, [e.target.name]: e.target.value})
}
const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(events);
    axiosWithAuth()
    .post('/api/classes', classes)
    .then(res =>{
        setClasses ({
        title:'',
        instructorId:'',
        categoryId:'',
        scheduleTime:'',
        address:'',
        city:'',
        state:'',
        zipCode:''
        })
        setEvents([...events, res.data])
    })
    .catch(err => {
        console.log(err)
    })
}


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

                <input type='text'
                name='title'
                placeholder='Instructor'
                value={classes.instructorId}
                onChange={handleChange}
                />

                <input type='text'
                name='title'
                placeholder='Category'
                value={classes.categoryId}
                onChange={handleChange}
                />
                <input type='text'
                name='time'
                placeholder='Time'
                value={classes.scheduleTime}
                onChange={handleChange}
                />
                <input type='text'
                name='address'
                placeholder='Address'
                value={classes.address}
                onChange={handleChange}
                />
                <input type='text'
                name='city'
                placeholder='City'
                value={classes.city}
                onChange={handleChange}
                />
                <input type='text'
                name='city'
                placeholder='State'
                value={classes.state}
                onChange={handleChange}
                />
                <input type='text'
                name='zip'
                placeholder='ZipCode'
                value={classes.zipCode}
                onChange={handleChange}
                />
                <button type='submit'>Add new class</button>
            </form>

        </div>
    )
}
export default GetClasses;