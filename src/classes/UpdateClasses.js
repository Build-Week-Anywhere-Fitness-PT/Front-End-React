import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const UpdateClasses = props =>{
    const [update, setUpdate] = useState({
        title:'',
        instructorId:'',
        categoryId:''
    })
   

    const handleUpdate = id =>{
        console.log(props.updateInfo)
        axiosWithAuth()
        .put(`/api/classes/${id}`, props.updateInfo)
        .then(res =>{
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
          })
    }

    return(
        <div className='update'>
            <button onClick={()=> handleUpdate(props.id)}>Update</button>
        </div>

    )
};
export default UpdateClasses;