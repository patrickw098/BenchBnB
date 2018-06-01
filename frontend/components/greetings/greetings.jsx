import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {currentUser, users} = this.props;
    if (currentUser === null){
      return (
        <div>
          <Link to='/signup'>Signup</Link>
          <Link to='/login'> Login </Link>
        </div>
      );
    }else{
      return(
        <div>
          <h1> Welcome, {users[currentUser].username}</h1>
          <button onClick={this.props.logoutUser}>Log Out</button>
        </div>
      );
    }
  }
}

export default Greeting;
