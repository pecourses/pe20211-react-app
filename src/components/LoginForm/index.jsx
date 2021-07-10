import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './LoginForm.module.scss';

class LoginForm extends Component {
  //rconst
  constructor(props) {
    super(props);

    this.state = {
      loginValue: '',
      isLoginValid: false,
      passwValue: '',
    };
  }

  handleLoginChange = ({ target: { value } }) => {
    // const {target:{value}} = e
    this.setState({
      loginValue: value,
      isLoginValid: /^\S+$/.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({ passwValue: value });
  };

  // handleChange = ({ target: { value, name } }) => {
  //   this.setState({ [name]: value });
  // };

  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    const { loginValue, passwValue, isLoginValid } = this.state;
    // const loginClassName = `${styles.input} ${
    //   isLoginValid ? styles.valid : null
    // }`;
    // const loginClassName = classNames(styles.input, {
    //   [styles.valid]: isLoginValid,
    //   [styles.invalid]: !isLoginValid,
    // // });
    // const loginClassName = classNames(styles.input,
    //   isLoginValid ? styles.valid : styles.invalid,
    // );
    const loginClassName = classNames(styles.input, {
      [isLoginValid ? styles.valid : styles.invalid]: loginValue,
    });
    return (
      <form className={styles.container} onSubmit={this.submitHandler}>
        <label className={styles.inputLabel}>
          Login
          <input
            className={loginClassName}
            type="text"
            placeholder="login"
            name="loginValue"
            value={loginValue}
            onChange={this.handleLoginChange}
          />
        </label>
        <label className={styles.inputLabel}>
          Password
          <input
            className={styles.input}
            type="password"
            name="passwValue"
            placeholder="password"
            value={passwValue}
            onChange={this.handlePasswordChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    );
  }
}
export default LoginForm;
