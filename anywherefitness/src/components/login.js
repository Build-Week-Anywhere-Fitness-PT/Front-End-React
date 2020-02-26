import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
    const [loginz, setLoginz] = useState({
      username:'',
      password:''
    })
    
  
    const handleChange = e =>{
      setLoginz({...loginz, [e.target.name]:
         e.target.value})
    }
  
    const handleSubmit = e =>{
      e.preventDefault();
      axiosWithAuth()
      .post('api/login', loginz)
      .then(res =>{
        console.log('login data', res.data)
        localStorage.setItem('token', res.data.payload);setLoginz(loginz)
        props.history.push('/protected')
    })
    .catch(err=>{console.log('inavlid login', err);
    });
    };
    
    return (
      
      <form onSubmit={handleSubmit}>
        
          <div>
            <h1>Anywhere Fitness Login!</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={loginz.username}
        onChange={handleChange}
      />
      <br/>
      <input
        type="password"
        name="password"
        placeholder="password"
        value={loginz.password}
        onChange={handleChange}
      />
      </div>
      <button>Log in</button>
    </form>
    
    );
  };
  
  export default Login;
  