import React, {useState, useEffect, useContext} from 'react';
import FitnessContext from '../context/FitnessContext'
import axiosWithAuth from '../utils/axiosWithAuth';


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


//Need to somehow fix my delete and create and Update class
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
                {classes.map(classForm=>
          <div key ={classForm.id}> <button onClick ={() => handleDelete(classForm.id)}>Delete</button>
              <br/>
              <h4>Workout: <p>{classForm.title}</p></h4>
          <h4>Instructor Id: <p>{classForm.instructorId}</p></h4>
          <h4>Category Id: <p>{classForm.categoryId}</p></h4>
              
          </div>)}
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