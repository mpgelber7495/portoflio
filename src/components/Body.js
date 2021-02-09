import React, { Component } from "react";
import Typing from "react-typing-animation";
import { Container } from "semantic-ui-react";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid id="main-body-container">
        <Typing speed={60}>
          <Typing.Delay ms={500} />
          <h5>
            Welcome to Mike's Portf <Typing.Backspace count={6} /> Website!
          </h5>
        </Typing>
      </Container>
    );
  }
}

export default Body;
