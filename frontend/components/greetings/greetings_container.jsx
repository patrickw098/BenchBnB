import { connect } from 'react-redux';
import { createUser, createNewSession, logoutSession } from '../../actions/session_actions';
import Greeting from './greetings';

const mapStateToProps = state => ({
  currentUser: state.session.id,
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  createUser: (userForm) => dispatch(createUser(userForm)),
  createNewSession: (userForm) => dispatch(createNewSession(userForm)),
  logoutUser: () => dispatch(logoutSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
