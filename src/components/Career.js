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
          time="February 2020 - Present"
          description={
            <React.Fragment>
              <p>
                I worked with my co-founder on a bootstrapped budget to launch{" "}
                <a href="www.adhouse.app">AdHouse</a>. We had the idea of making
                enterprise level digital marketing available to private
                heatlhcare practices.
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
          image="/assets/images/jpm-logo.png"
          title="CEO & Co-Founder"
          time="February 2020 - Present"
          description={
            <React.Fragment>
              <p>
                I worked with my co-founder on a bootstrapped budget to launch{" "}
                <a href="www.adhouse.app">AdHouse</a>. We had the idea of making
                enterprise level digital marketing available to private
                heatlhcare practices.
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
      </Container>
    );
  }
}

export default Career;
