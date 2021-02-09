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
        <img className="headshot" src="https://i.imgur.com/52ZqygY.png" />
        <Typing speed={60}>
          <Typing.Delay ms={500} />
          <h5>
            Welcome to Mike's Portf <Typing.Backspace count={6} /> Website!
          </h5>
        </Typing>
        {/* <Typing speed={10}> */}
        <p className="intro-paragraph">
          Hi &#128075; I'm Mike Gelber! I'm a Product Manager and Software
          Engineer who is passionate about building products that solve problems
          for people. I enjoy learning about technology and working in
          collaborative environments. Scroll down to learn more!
          <br />
          <i className="caret down icon intro-arrow-down"></i>
        </p>
        {/* </Typing> */}
      </Container>
    );
  }
}

export default Body;
