import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { LoginC } from '../components/Login/LoginC';
import { CreateAcount } from '../components/Login/CreateLink';

import { Row, Col, Container } from 'react-bootstrap';
export class BLogin extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <Container>
          <main>
            <Row>
              <Col md={6}>
                <LoginC />
              </Col>
              <Col md={6}>
                <CreateAcount />
              </Col>
            </Row>
          </main>
        </Container>
      </>
    );
  }
}
