import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class App extends Component {
    render() {
        const link = "blog/" + this.props.id;

        return (
            <Link to={link}>
                <h2>{this.props.blog_title}</h2>
                <p>{this.props.blog_body}</p>
            </Link>
        );
    }
}
