import React from 'react'

import { useFormik } from 'formik';
import validationSchema from './validations';

function SignUp() {
  const {handleChange, handleSubmit, handleBlur, values, errors, touched} = useFormik({
    initialValues: {
      email: '',
      password:'',
      passwordConfirm:'',
    },
    onSubmit:values => {
      console.log(values);
    },
    validationSchema
  })
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && (<div style={{color:'red'}}>{errors.email}</div>)}
        <br /><br />
        <label>password</label>
        <input
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && (<div style={{color:'red'}}>{errors.password}</div>)}
        <br /><br />
        <label>confirm password</label>
        <input
          name="passwordConfirm"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConfirm}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (<div style={{color:'red'}}>{errors.passwordConfirm}</div>)}
        <br /><br />
        <button type="submit">Submit</button>
        <br /><br />
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  )
}

export default SignUp
