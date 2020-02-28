import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import GetClasses from '../classes/GetClasses'
import stlyed from 'styled-components';



const FitnessDashCli = props =>{
    const [classes, setClasses] = useState([])

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
    }, [{}]);

    return(
       <div>
          <GetClasses/>
      </div>
    )
}
export default FitnessDashCli