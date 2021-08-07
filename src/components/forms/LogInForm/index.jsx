import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LOGIN_SCHEMA } from '../../../utils/validatingSchemas';
import Input from '../Input';

function LogInForm () {
  const loginFormInitialValues = {
    email: '',
    password: '',
  };

  const loginFormHandleSubmit = (values, formikBag) => {
    console.log('values :>> ', values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={loginFormInitialValues}
      onSubmit={loginFormHandleSubmit}
      validationSchema={LOGIN_SCHEMA}
    >
      {formikProps => {
        return (
          <Form>
            <Input
              type='text'
              name='email'
              placeholder='test@test.test'
              autofocus
            />
            <Input type='password' name='password' />

            <button type='submit'>Submit</button>
          </Form>
          // =>{email:'', password:''}
        );
      }}
    </Formik>
  );
}

export default LogInForm;
