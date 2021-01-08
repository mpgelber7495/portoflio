import React, { Component } from "react";
import Typing from "react-typing-animation";
import { Container } from "semantic-ui-react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid id="footer">
        {" "}
        <div className="ui stackable grid">
          <div className="eight wide column">
            <a href="https://github.com/mpgelber7495" target="_blank">
              <i class="github square icon"></i>
            </a>
          </div>
          <div className="eight wide column">
            <a
              href="https://www.linkedin.com/in/michael-gelber-290329a5/"
              target="_blank"
            >
              <i class="linkedin  icon"></i>
            </a>
          </div>
        </div>
      </Container>
    );
  }
}

export default Footer;
