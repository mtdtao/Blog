import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

const validate = values => {
  const errors = {}
  if (!values.blog_title) {
    errors.blog_title = 'Required'
  } else if (values.blog_title.length > 15) {
    errors.blog_title = 'Must be 15 characters or less'
  }
  if (!values.blog_body) {
    errors.blog_body = 'Required'
  }

  return errors
}

const warn = values => {
  const warnings = {}
  if (values.blog_title && values.blog_title.length < 5) {
    warnings.blog_title = 'Hmm, you seem a bit short...'
  }
  return warnings
}

const renderField = ({
  input,
  label,
  type,
  formStyle,
  meta: { touched, error, warning }
}) => {
    let inputForm;
    if (formStyle === 'textarea') {
        inputForm = (<textarea rows='10' {...input} placeholder={label} type={type} className="form-control" />)
    } else {
        inputForm = <input {...input} placeholder={label} type={type} className="form-control" />

    }
    return (
      <div className="input-field">
        <label>{label}</label>
        <div>
          {inputForm}
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    )
}

let WriteBlogForm = props => {
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
        <form className='write_blog_form' onSubmit={handleSubmit}>
            <Field name="blog_title" type="text" component={renderField} label="title"/>
            <Field name="blog_body" type="text" component={renderField} label="blog" formStyle="textarea"/>
            {renderAlert()}
            <button action="submit" className="btn btn-primary">Post</button>
        </form>
    )
}


export default reduxForm({
  form: 'write_blog',
  validate,
  warn
})(WriteBlogForm);
