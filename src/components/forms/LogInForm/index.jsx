import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LOGIN_SCHEMA } from '../../../utils/validatingSchemas';

function LogInForm() {
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
      validationSchema={LOGIN_SCHEMA}>
      {formikProps => {
        return (
          <Form>
            <Input type="text" name="email" />

            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" />

            <br />

            <Input type="password" name="password" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />

            <button type="submit">Submit</button>
          </Form>
          // =>{email:'', password:''}
        );
      }}
    </Formik>

    // <Formik
    //   initialValues={{
    //     userEmail: '',
    //     userPassword: '',
    //   }}
    //   validationSchema={LOGIN_SCHEMA}
    //   onSubmit={(values, formikBag) => {
    //     console.log(`values`, values);
    //     formikBag.resetForm();
    //   }}>
    //   {formikProps => {
    //     return (
    //       // <form onSubmit={formikProps.onSubmit}>
    //       <Form>
    //         <Field type="email" name="userEmail" />
    //         <Field type="password" name="userPassword" />
    //         <button type="submit">Submit</button>
    //       </Form>
    //       // {userEmail:'', userPassword:''}
    //     );
    //   }}
    // </Formik>
  );
}

export default LogInForm;
