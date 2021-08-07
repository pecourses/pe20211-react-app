import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';
import styles from './Input.module.scss';

function Input (props) {
  const { name, ...rest } = props;
  return (
    <div>
      {/* <Field name={props.name} type={props.type} /> */}
      <Field name={name}>
        {({ field, form, meta }) => {
          const inputClassNames = classNames(styles.input, {
            [styles.validInput]: !meta.error && meta.touched,
            [styles.invalidInput]: meta.error && meta.touched,
          });

          return <input {...field} {...rest} className={inputClassNames} />;
        }}
      </Field>
      <ErrorMessage name={props.name} component='div' />
    </div>
  );
}
// field => { name, value, onChange, onBlur }
// props => name + {все остальные пропсы Input}
export default Input;
