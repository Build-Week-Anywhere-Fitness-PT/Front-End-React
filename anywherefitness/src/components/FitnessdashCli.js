import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import stlyed from 'styled-components';



const FitnessDashCli = props =>{
    const [classes, setClasses] = useState([])
// //implement a search functionality
//     useEffect(()=>{
//         axiosWithAuth()
//         .get('/api/category', classes)
//         .then(res =>{
//             console.log(res)
//             setClasses(res.data)
//         })
//         .catch(err =>{
//             console.log(err)
//         });
//     }, []);

    return(
       <div>
          <h1>Welcome back</h1>
          <h2>{localStorage.getItem('username')}</h2>

          will add a seach functionality here
          {/* <br/>
          {classes.map(classes => 
          <div key ={classes.id}>
              <br/>
              <h4>Workout: <p>{classes.name}</p></h4>
              <h5>Description: <p>{classes.description}</p></h5>
              
              
          </div>)} */}

      </div>
    )
}
export default FitnessDashCli