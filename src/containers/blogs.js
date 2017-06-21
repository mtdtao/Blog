import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import actions from '../redux/actions';

import BlogCard from '../components/blog_card';


class Blogs extends Component {
    componentWillMount() {
        this.props.getBlogs();
    }

    renderBlogCards() {
        if (!_.isArray(this.props.blogs)) {
            return <a>nothing</a>
        }

        const blogs = this.props.blogs;

        return blogs.map((blog) => {
            return (
                <BlogCard {...blog} key={blog.id}/>
            );
        });

    }

    render() {
        return (
            <div className='container'>
                {this.renderBlogCards()}
            </div>
        )
    }
}

export default connect((state) => {
        return state;
    }, actions)(Blogs);
