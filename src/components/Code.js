import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import CodingProject from "./CodingProject";

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
        <CodingProject
          projectName="AdHouse"
          github="https://github.com/mpgelber7495/adhouse-platform"
          githubPrivate={true}
          medium="https://medium.com/@mpgelber7495/adhouse-why-we-built-it-2d1e3cf24930"
          demoLink="https://adhouse-platform.appspot.com/"
          videoLink="/assets/videos/adhouse-demo.mp4"
          projectDescription={
            <React.Fragment>
              <h3>Overview</h3>
              <p>
                AdHouse allows health care practices to advertise on the
                internet. The ultra-simplified workflow puts the power of
                zipcode and health insurance provider targeting at the
                finger-tips of today's doctors.
                <br />
                <br /> AdHouse also leverages machine learning to automate the
                creation of practice's advertisements. AdHouse is a
                fully-productionalized application with clients and revenue.
              </p>
              <h3>Technologies Used</h3>
              <p>
                ReactJS, Node w/ Express, Google App Engine, Google Vision API,
                Google Places API, Google KMS, Google CI/CD, PostgresSQL,
                Stripe, AppNexus, Prerender.io, Contentful, Algolia
              </p>
            </React.Fragment>
          }
        />
      </Container>
    );
  }
}

export default Code;
