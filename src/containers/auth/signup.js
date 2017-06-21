import React, { Component } from 'react';
import SignupForm from '../../components/signup_form';
import { connect } from 'react-redux';
import  actions from '../../redux/actions';

class SignUp extends Component {
    submit = (values) => {
        console.log('submit sign up');
        console.log(values);
        this.props.signUpUser(values);
    }

    render() {
        return (
            <SignupForm onSubmit={this.submit} submitError={this.props.submitError} />
        );
    }
}

export default connect((state) => {
    return {submitError: state.writeBlog};
}, actions)(SignUp);
