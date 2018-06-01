import React from 'react';
import Greeting from './greetings/greetings_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <Greeting />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
