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
        <div>
          <h1>Code.</h1>
        </div>
        <div className="code-languages-container">
          <i class="devicon-javascript-plain"></i>
          <i class="devicon-python-plain-wordmark"></i>
          <i class="devicon-react-original-wordmark"></i>
          <i class="devicon-nodejs-plain-wordmark"></i>
          <i class="devicon-html5-plain-wordmark"></i>
          <i class="devicon-mysql-plain-wordmark"></i>
          <i class="devicon-css3-plain-wordmark"></i>
        </div>
        <div className="ui stackable grid">
          <div className="eight wide column">
            <h1>AdHouse </h1>

            <video width="480 height=" auto controls>
              <source src="/assets/videos/adhouse-demo.mp4" type="video/mp4" />
              "Your browser does not support the video tag."
            </video>
          </div>
          <div className="eight wide column">
            <div className="ui stackable grid">
              <div className="five wide column">
                <a href="https://github.com/mpgelber7495/adhouse-platform">
                  <h3>
                    Github
                    <br />
                    (private)
                  </h3>
                </a>
              </div>
              <div className="five wide column">
                <a href="https://medium.com/@mpgelber7495/adhouse-why-we-built-it-2d1e3cf24930">
                  <h3>Medium</h3>
                </a>
              </div>
              <div className="five wide column">
                <a href="https://adhouse-platform.appspot.com/">
                  <h3>Live Demo</h3>
                </a>
              </div>
              <div className="sixteen wide column">
                <h3>Overview</h3>
                <p>
                  AdHouse allows health care practices to advertise on the
                  internet. The ultra-simplified workflow puts the power of
                  zipcode and health insurance provider targeting at the
                  finger-tips of today's doctors.
                </p>
                <h3>Technologies Used</h3>
                <p>
                  ReactJS, Node w/ Express, Google App Engine, Google Vision
                  API, Google Places API, Google KMS, Google CI/CD, PostgresSQL,
                  Stripe, AppNexus, Prerender.io, Contentful
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Code;
