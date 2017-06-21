import React, { Component } from 'react';
import WriteBlogForm from '../components/write_blog_form';
import { connect } from 'react-redux';
import actions from '../redux/actions';

class WriteBlog extends Component {
    submit = (values) => {
        console.log('submitt');
        this.props.postBlog(this.props.history, values);
    }

    render() {
        return (
            <div className='container'>
                <WriteBlogForm onSubmit={this.submit} submitError={this.props.submitError} />
            </div>
        );
    }
}

export default connect((state) => {
    return {submitError: state.writeBlog};
}, actions)(WriteBlog);
