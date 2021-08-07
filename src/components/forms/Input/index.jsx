import React from 'react';
import { Field, ErrorMessage } from 'formik';

function Input(props) {
  const { name, ...rest } = props;
  console.log('rest :>> ', rest);
  return (
    <div>
      {/* <Field name={props.name} type={props.type} /> */}
      <Field name={name}>
        {({ field, form, meta }) => {
          return <input {...field} {...rest} />;
        }}
      </Field>
      <ErrorMessage name={props.name} component="div" />
    </div>
  );
}
// field => { name, value, onChange, onBlur }
export default Input;
