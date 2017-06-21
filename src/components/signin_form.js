import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (values.email.length > 15) {
    errors.email = 'Must be 15 characters or less'
  }
  if (!values.password) {
    errors.password = 'Required'
  }

  return errors
}



const warn = values => {
  const warnings = {}

  return warnings
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control" />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

let SignInForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;

    const renderAlert = () => {
        if (!_.isEmpty(props.submitError)) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops! Error </strong>
                </div>
            );
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" type="text" component={renderField} label="email"/>
            <Field name="password" type="password" component={renderField} label="password"/>
            {renderAlert()}
            <button action="submit" className="btn btn-primary">Post</button>
        </form>
    )
}


export default reduxForm({
  form: 'signin',
  validate,
  warn
})(SignInForm);
