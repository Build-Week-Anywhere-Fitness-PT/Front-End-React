import React, { useState } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import InstructorSignup from './InstructorSignUp';
import axios from 'axios';


const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const SignUp = (props) => (



  <div>
    <h1>Sign up form</h1>
    <Formik
      initialValues={{ username: 'username', password: 'password', firstName: 'firstname', lastName: 'lastname',email: 'email', roleId: `roleId` }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;

        
      }}
      onSubmit={(values, { setSubmitting }) => {
        axios.post("https://lambda-anywhere-fitness.herokuapp.com/api/auth/register", values)
        .then(res => {
          console.log(res);
          props.history.push("/");
          if(  res.data.roleId === 1  ){
            alert("student account successfully registered")
          }
          else if ( res.data.roleId === 2){
            alert("coach account successfully registered")
          }
        } )
        .catch(error => {
          console.log(error);
        }
        )
      
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <FormWrapper onSubmit={handleSubmit}>
         <input
            type="username"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />   
         <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
         <input
            type="firstName"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          <input
            type="lastName"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />         
         <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <input
            type="roleId"
            name="roleId"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.roleId}
          />
          {errors.username && touched.username && errors.username}
          {errors.password && touched.password && errors.password}
          {errors.firstName && touched.firstName && errors.firstName}                    
          {errors.lastName && touched.lastName && errors.lastName}                    
          {errors.email && touched.email && errors.email}
          {errors.roleId && touched.roleId && errors.roleId}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </FormWrapper>
      )}
    </Formik>
    <br></br>
    <br></br>
    {/* <InstructorSignup /> */}
  </div>
);



export default SignUp;