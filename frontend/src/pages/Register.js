import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { RegisterC } from '../components/Register/RegisterC';

export class BRegister extends Component {
  render() {
    return (
      <>
        <Container>
          <main>
            <Row>
              <Col md={12}>
                <RegisterC />
              </Col>
            </Row>
          </main>
        </Container>
      </>
    );
  }
}
