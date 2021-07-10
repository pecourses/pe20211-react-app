import React, { Component } from 'react';

class LoginForm extends Component {
  //rconst
  constructor(props) {
    super(props);

    this.state = {
      loginValue: '',
      passwValue: '',
    };
  }

  // handleLoginChange = ({ target: { value } }) => {
  //   // const {target:{value}} = e
  //   this.setState({ loginValue: value });
  // };

  // handlePasswordChange = ({ target: { value } }) => {
  //   this.setState({ passwValue: value });
  // };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    const { loginValue, passwValue } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <label>
          Login
          <input
            type="text"
            placeholder="login"
            name="loginValue"
            value={loginValue}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="passwValue"
            placeholder="password"
            value={passwValue}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    );
  }
}
export default LoginForm;
