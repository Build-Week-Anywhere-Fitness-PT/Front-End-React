import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const UpdateClasses = props =>{
    const [update, setUpdate] = useState({
        title:'',
        instructorId:'',
        categoryId:''
    })
   

    const handleUpdate = id =>{
        axiosWithAuth()
        .put(`/api/classes/${id}`, update)
        .then(res =>{
            setUpdate(...update, res.data)
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