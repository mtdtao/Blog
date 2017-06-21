import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import actions from '../redux/actions';

class navBar extends Component {

    signOutBtnClicked = (values) => {
        this.props.signOutUser();
        this.props.history.push('/');
    }

    renderLinks() {
        console.log('auth in nav');
        console.log(this.props.authenticated);
      if (this.props.authenticated) {
        return (
            <NavItem onClick={this.signOutBtnClicked}>
                Sign Out
            </NavItem>
        )
      } else {
        return [
          <NavItem key={1} href="/signin">
            Sign In
          </NavItem>,
          <NavItem key={2} href="/signup">
            Sign Up
          </NavItem>
        ];
      }
    }

    write() {
        return <NavItem key={1.1} href="/write">
          Write
        </NavItem>
    }

    render() {
        return (
            <Navbar staticTop fixedTop>
                <Navbar.Header>
                  <Navbar.Brand>
                    <Link to="/">Blog</Link>
                  </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    {this.write()}
                    {this.renderLinks()}
                </Nav>

            </Navbar>
        );
    }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.uid
  };
}

export default withRouter(connect(mapStateToProps, actions)(navBar));
