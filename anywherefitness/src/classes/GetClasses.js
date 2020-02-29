import React, {useState, useEffect, useContext} from 'react';
import FitnessContext from '../context/FitnessContext'
import axiosWithAuth from '../utils/axiosWithAuth';


//THIS IS FOR THE INSTRUCTOR TO CREATE A NEW CLASS
const GetClasses = () => {
    const {events, setEvents} = useContext(FitnessContext);
    const [classes, setClasses] = useState([])
const handleChange = e =>{
    setClasses({...classes, [e.target.name]: e.target.value})
}

useEffect(()=>{
    axiosWithAuth()
    .get('/api/classes', classes)
    // headers: {'authorization'}
    .then(res =>{
        console.log(res)
        setClasses(res.data)
    })
    
    .catch(err =>{
        console.log(err)
    });
}, []);

// const handleNumberChange = e =>{
//     key=Number(e.target.value);
// }
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

const handleDelete = id =>{
    axiosWithAuth()
    .delete('/api/classes:id')
    .then( res =>{
        console.log(res)
        setEvents(events.filter(item => item.id !== id))
    })
}
//SET STATE TO RESPONSE

    return(
        
        <div className='classes'>
            <h2>Class I've created</h2>
                {classes.map(classes => 
          <div key ={classes.id}> <button onClick ={() => handleDelete(events.id)}>Delete</button>
              <br/>
              <h4>Workout: <p>{classes.title}</p></h4>
          <h4>Instructor Id: <p>{classes.instructorId}</p></h4>
          <h4>Category Id: <p>{classes.categoryId}</p></h4>

              <h5>Description: <p>{classes.description}</p></h5>
              
          </div>)}
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
                value={classes.categoryId}
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