import React from 'react';


const Logout = props => {
    const Logout = () =>{
        localStorage.clear('token');
        props.history.push('/');
      }

    return(
        <button onClick={Logout}>Logout</button>
    )
};

export default Logout;