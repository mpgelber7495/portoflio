import React, { Component } from "react";
import { Container } from "semantic-ui-react";

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid id="code-body-container">
        <i class="devicon-aftereffects-plain"></i>
      </Container>
    );
  }
}

export default Code;
