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
          image="https://i.imgur.com/tlPFW8d.png"
          title="CEO & Co-Founder (Product & Eng)"
          time="February 2020 - Present"
          description={
            <React.Fragment>
              <p>
                AdHouse puts the power of digital advertising at the fingertips
                of health care providers via an effective and simple to use UI.
              </p>
              <p>
                My co-founder and I came up with the idea, learned to code via a
                Columbia University bootcamp and then launched the company on a
                bootstrapped budget.
              </p>
            </React.Fragment>
          }
        />
        <div className="flex-center">
          <div className="career-object-divider"></div>
        </div>
        <CareerObject
          image="https://i.imgur.com/dC54XMG.png"
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
          image="https://i.imgur.com/Gwx4Ydh.png"
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
        <div className="career-section-resume-link">
          <p>
            For a full look at my professional background, visit my{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/michael-gelber-290329a5/"
            >
              linkedin
            </a>{" "}
            or download my{" "}
            <a
              href="https://storage.googleapis.com/mikes-vids/Gelber%2C%20Michael%20-%20Resume%20-%201.7.2021.pdf"
              download="MikesResume.pdf"
            >
              resume
            </a>
            !
          </p>
        </div>
      </Container>
    );
  }
}

export default Career;
