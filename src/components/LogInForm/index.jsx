import React from 'react';
import { Formik, Form, Field } from 'formik';
import { LOGIN_SCHEMA } from '../../utils/validatingSchemas';

function LogInForm() {
  return (
    <Formik
      initialValues={{
        userEmail: '',
        userPassword: '',
      }}
      validationSchema={LOGIN_SCHEMA}
      onSubmit={(values, formikBag) => {
        console.log(`values`, values);

        formikBag.resetForm();
      }}>
      {formikProps => {
        return (
          // <form onSubmit={formikProps.onSubmit}>
          <Form>
            <Field type="email" name="userEmail" />
            <Field type="password" name="userPassword" />
            <button type="submit">Submit</button>
          </Form>
          // {userEmail:'', userPassword:''}
        );
      }}
    </Formik>
  );
}

export default LogInForm;
