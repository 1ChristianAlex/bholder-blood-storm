import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export class Home extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Bholder RPG</title>
        </Helmet>
        <h1>Hello World</h1>
      </>
    );
  }
}
