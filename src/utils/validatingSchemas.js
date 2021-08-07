import * as yup from 'yup';

export const LOGIN_SCHEMA = yup.object({
  email: yup
    .string()
    .email('Your message')
    .required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%^&*].*).{8,32}$/,
      'Password must contain...'
    )
    .min(8)
    .max(32)
    .required(),
});
// export const SIGNUP_SCHEMA =

// -------------------------------------------------------
// схема для user = {firstName, lastName, age}
// const user = {
//   firstName: 'dfgfdest',
//   lastName: 'Tester',
//   age: 1,
// };

// const NAME_SCHEMA = yup
//   .string()
//   .matches(/^([A-Z][a-z]{1,18})$/)
//   .required();

// const USER_SCHEMA = yup.object({
//   firstName: NAME_SCHEMA,
//   lastName: NAME_SCHEMA,
//   age: yup.number().positive().integer().max(130),
// });

// const isValidUser = USER_SCHEMA.isValidSync(user);
// console.log(isValidUser);
//-------------------------------------
// const validatedObject = {
//   email: 'qwerty@qwerty.com',
//   password: '1234Aj465##56',
// };

// isValid, isValidSync, validate, validateSync
// const isValid = LOGIN_SCHEMA.isValidSync(validatedObject);

// passwordConfirmation: ....oneOf([yup.ref('password')], 'confirmation pass must match password')
