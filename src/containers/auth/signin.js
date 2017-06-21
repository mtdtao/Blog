import React, { Component } from 'react';
import SigninForm from '../../components/signin_form';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

class SignIn extends Component {
    submit = (values) => {
        console.log('submitt');
        this.props.signInUser(values);
    }

    render() {
        return (
            <SigninForm onSubmit={this.submit} submitError={this.props.submitError} />
        );
    }
}

export default connect((state) => {
    return {submitError: state.writeBlog};
}, actions)(SignIn);
