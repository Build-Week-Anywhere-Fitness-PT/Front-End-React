import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';

// const LoginBox = styled.div `
// justify-content: center;
// margin: 0 auto;
// width: 18%;
// border: 1px solid black;
// border-radius:  3px;
// `

const Login = props => {
    const [loginz, setLoginz] = useState({
      username:'',
      password:''
    })
    const [isLoading, setIsLoading] = useState(false);
    
    const handleChange = e => {
      setLoginz({
        ...loginz,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
      setIsLoading(true);
  
  
      axiosWithAuth()
        .post("/api/auth/login", loginz)
        .then(
          res => {
            
            
  
            if (res.data.user.roleId !== 2) {
              
  
              //Set Token in Local Storage
              localStorage.setItem("token", res.data.token);
  
              //Set Username in Local Storage
              localStorage.setItem("username", res.data.user.username);
  
              //Set InstructorID in Local Storage
              localStorage.setItem("studentID", res.data.user.id);
  
              
  
              props.history.push("/student");
  
            } else if (res.data.user.roleId !== 1) {
              
              //Set Token in Local Storage
              localStorage.setItem("token", res.data.token);
  
              //Set Username in Local Storage
              localStorage.setItem("username", res.data.user.username);
  
              //Set InstructorID in Local Storage
              localStorage.setItem("instructorID", res.data.user.id);
  
  
              props.history.push("/instructor");
  
              setIsLoading(true);
  
              if (res.data.user.roleId === 2) {
                console.log("Student");
  
                props.history.push("/student");
              } else if (res.data.user.roleId === 1) {
                props.history.push("/instructor");
              }
  
              localStorage.setItem("token", res.data.token);
  
              setTimeout(function() {
                setIsLoading(false);
              }, 1000);
            }
          }
          // .catch(err => {
          //     // setError(err.response.data.message)
          //     console.log(err);
          //   });
        );
    };
  
    return (
      <>
  
        <div>
          <h1>Login</h1>
  
          <form
            onSubmit={handleSubmit}>
  
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginz.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginz.password}
              onChange={handleChange}
            />
  
            <button type="submit">Sign In</button>
          </form>
        </div>
      </>
    );
  };
    
  
  //   const handleChange = e =>{
  //     setLoginz({...loginz, [e.target.name]:
  //        e.target.value})
  //   }
  
  //   const handleSubmit = e =>{
  //     e.preventDefault();
  //     axiosWithAuth()
  //     .post('/api/auth/login', loginz)
  //     .then(res =>{
  //       console.log('login data', res.data)
  //       localStorage.setItem('token', res.data.token);
  //       setLoginz(loginz)
  //       if (res.data.type === "instructor") {
  //         props.history.push("/instructor");
  //       } else {
  //         props.history.push("/client");
  //       }
  //       props.history.push('/protected')
  //   })
  //   .catch(err=>{console.log('inavlid login', err);
  //   });
  //   };
    
  //   return (
      
      
  //     <form onSubmit={handleSubmit}>
        
  //         <div>
  //           <h1>Anywhere Fitness Login!</h1>
  //           <LoginBox>
  //             <br/>
  //     <input
  //       type="text"
  //       name="username"
  //       placeholder="username"
  //       value={loginz.username}
  //       onChange={handleChange}
  //     />
  //     <br/>
  //     <br/>
  //     <input
  //       type="password"
  //       name="password"
  //       placeholder="password"
  //       value={loginz.password}
  //       onChange={handleChange}
  //     />
  //     <br/>
  //     <br/>
  //     </LoginBox>
  //     </div>
  //     <button>Log in</button>
  //   </form>
  //   );
  // };
  
  export default Login;
  