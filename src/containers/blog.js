import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import _ from 'lodash';

class Blog extends Component {
    componentWillMount() {
        this.props.loadViewBlog(this.props.match.params._id);
    }

    renderBlog() {
        const blog = this.props.blogViewing;
        return (
            <div>
                <h1>{blog.blog_title}</h1>
                <h3>{blog.blog_body}</h3>
            </div>
        )
    }

    render() {
        return (
            <div className='container'>
                {this.renderBlog()}
            </div>
        );
    }
}

export default connect((state) => {
        return state;
    }, actions)(Blog);
