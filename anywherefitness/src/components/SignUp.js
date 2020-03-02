import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;


const SignUp = () => (
  <div>
    <h1>Sign up form</h1>
    <Formik
      initialValues={{ username: 'username', password: 'password', firstName: 'first name', lastName: 'last name',email: 'email', roleId: 'role ID' }}
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
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
  </div>
);

export default SignUp;