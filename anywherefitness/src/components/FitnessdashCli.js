import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';

const FitCli = styled.div `
background: linear-gradient(#f5f5f5 .5%, #33ccff 100%);
display: flex;
flex-direction: column-reverse;
`

const FitnessDashCli = props =>{
    const [classes, setClasses] = useState([])
    const [category, setCategory] = useState({})
// //implement a search functionality

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

    return(
        <FitCli>
       <div>
          <h1>Welcome back</h1>
          <h2>{localStorage.getItem('username')}</h2>

          will add a seach functionality here
          <br/>
          {classes.map(classes => 
          <div key ={classes.id}>
              <br/>
              <h4>Workout: <p>{classes.title}</p></h4>
          <h4>Instructor Id: <p>{classes.instructorId}</p></h4>
          <h4>Category Id: <p>{classes.categoryId}</p></h4>

              <h5>Description: <p>{classes.description}</p></h5>
              
              
          </div>)}

      </div>
      </FitCli>
    )
}
export default FitnessDashCli