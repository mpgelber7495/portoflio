import React, { Component } from "react";
import { Container } from "semantic-ui-react";

class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid id="career-body-container">
        <h1>Career.</h1>
        <div className="career-object-container">
          <img src="/assets/images/adhouse-logo.png" />
          <h3>CEO & Co-Founder</h3>
        </div>

        <div>
          <img src="/assets/images/appnexus-logo.png" />
        </div>
        <div>
          <img src="/assets/images/jpm-logo.png" />
        </div>
      </Container>
    );
  }
}

export default Career;
