import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
        <div className="Footer">
          <div className="container">
            <Row>
              <Col lg={8} md={10} lgOffset={2} mdOffset={1}>
                <p className="FooterText">
                  Jintao
                </p>
                <a className="TermsPricacyLink">
                  Terms and privacy</a>
              </Col>
            </Row>
          </div>
        </div>
    );
  }
}
