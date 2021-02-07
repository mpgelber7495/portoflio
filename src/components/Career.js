import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import CareerObject from "./CareerObject";

class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid id="career-body-container">
        <h1>Career.</h1>
        <CareerObject
          image="/assets/images/adhouse-logo.png"
          title="CEO & Co-Founder"
          time="February 2020 - Present"
          description={
            <React.Fragment>
              <p>
                I worked with my co-founder on a bootstrapped budget to launch{" "}
                <a href="www.adhouse.app">AdHouse</a>. We had the idea of making
                enterprise level digital marketing capabilites available to
                private heatlhcare practices.
              </p>
              <p>
                After learning how to program via a Columbia University
                Bootcamp, we researched the market, planned the product and then
                programmed the entire platform ourselves.
              </p>
            </React.Fragment>
          }
        />
        <div className="flex-center">
          <div className="career-object-divider"></div>
        </div>
        <CareerObject
          image="/assets/images/appnexus-logo.png"
          title={
            <React.Fragment>
              Product Specialist II, Team Lead <br /> Solutions Consultant I{" "}
              <br />
              Associate Solutions Consultant
            </React.Fragment>
          }
          time="August 2019 - February 2020"
          description={
            <React.Fragment>
              <p>
                At AppNexus I worked on various teams to provide exceptional
                experiences for key clients. I worked with clients to help them
                best leverage the platform for their business needs.
              </p>
              <p>
                I also worked to build tools that automate job functions and
                fill product gaps.
              </p>
            </React.Fragment>
          }
        />
        <div className="flex-center">
          <div className="career-object-divider"></div>
        </div>
        <CareerObject
          image="/assets/images/jpm-logo.png"
          title="Wealth Management Analyst"
          time="Summer 2016 & July 2017 – January 2018"
          description={
            <React.Fragment>
              <p>
                At J.P. Morgan I worked with bankers and investors to manage the
                finances of ultra high net worth individual and families.
              </p>
              <p>
                I began using VBA to build tools that automated the analyst job
                function. The pleasure I got from building these tools led me to
                persue a job in tech.
              </p>
            </React.Fragment>
          }
        />
        <div className="flex-center">
          <div className="career-object-divider"></div>
        </div>
      </Container>
    );
  }
}

export default Career;
