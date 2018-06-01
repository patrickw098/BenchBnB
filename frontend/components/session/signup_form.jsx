import React from 'react';
import { Redirect } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState( {
        [type]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  render() {

    return (
      <div>
        {this.props.errors}
        <form>
          <label>Username:
            <input type="text" onChange={this.handleInput('username')} value={this.state.username}></input>
          </label>
          <label>Password:
            <input type="password" onChange={this.handleInput('password')} value={this.state.password}></input>
          </label>
          <button onClick={this.handleSubmit}>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
