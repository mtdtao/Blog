import React, { Component } from 'react';
import NavBar from './navBar';
import { connect } from 'react-redux';
import actions from '../redux/actions';

class App extends Component {
    render() {
        console.log('App props');
        // console.log(this.props);
        return (
            <div>
                <NavBar />
                {this.props.children}
            </div>
        );
    }
}

export default connect((state) => {
    return state;
}, actions)(App);
