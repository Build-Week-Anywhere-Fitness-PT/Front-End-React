import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';

const LoginBox = styled.div `
margin: 30px 40px 0px 380px;
justify-content: center;
background: #4D724D;
color: #f5f5f5;

width: 40%;
height: 90vh;
border: 1px solid black;
border-radius:  3px;
`
const StyleForm = styled.div`
background: #8DB48E;
margin: 0 auto;
border-radius: 10%;
padding: 20px;
width: 60%;
`
// #F5F5F5
// #8DB48E
// #4D724D 

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
      <LoginBox>
        <div>
          <h1>Anywhere Fitness</h1>
          <h5>Login</h5>
          <img src="images/AF.png" alt='logo'/>
          <br/>
          <form
            onSubmit={handleSubmit}>
              <StyleForm>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginz.username}
              onChange={handleChange}
            />
            <br/>
            <br/>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginz.password}
              onChange={handleChange}
            />
            </StyleForm>
            <br/>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <footer>
          <h6>Copy Right 2020 Anywhere Fitness</h6>
        </footer>
        </LoginBox>
        
      </>
    );
  };
  
  export default Login;
  