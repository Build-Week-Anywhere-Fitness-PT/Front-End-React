import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';
import Search from './Search';

 const FitCli = styled.div `
 background: gray;
 `
 const Client = styled.div `
 display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 20%;
margin: auto;
border: 3px solid black;
 `
 const Img = styled.div `
 margin-right:1340px;
 margin-bottom: -102px;

 `

const FitnessDashCli = props =>{
    const [classes, setClasses] = useState([]);
    const [search, setSearch] = useState('');
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

const handleSearch = (e) =>{
    e.preventDefault()
    console.log(e.target.value)
    setSearch(e.target.value)
    setClasses(classes.filter(classes => classes.title.toLowerCase().includes(search.toLocaleLowerCase()) ))
}

    return(
        <FitCli>
       <div>  
          <h1>Welcome back</h1>
          <h2>{localStorage.getItem('username')}</h2>
          
          <br/>
          <Search handleSearch={handleSearch} search = {search}/>

          
          {classes.map(classes => 
          <div key ={classes.id}>
              <br/>
              <Client>
              <h4>Workout: <p>{classes.title}</p></h4>
              
              
          <h4>Instructor Id: <p>{classes.instructorId}</p></h4>
          
          <h4>Category Id: <p>{classes.categoryId}</p></h4>
              </Client>
              
          </div>)}
          
      </div>
     </FitCli>
    )
}
export default FitnessDashCli;