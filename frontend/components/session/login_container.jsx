import { connect } from 'react-redux';
import { createNewSession } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mapStateToProps = state => ({
  errors: state.errors.sessionErrors,
  formType: "login"
});

const mapDispatchToProps = dispatch => ({
  submitForm: (userForm) => dispatch(createNewSession(userForm))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
