import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import CodingProject from "./CodingProject";
import WritingLink from "./WritingLink";

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
        <div className="secondary-heading-container">
          <h2>Coding Projects</h2>
        </div>

        <CodingProject
          projectName="AdHouse"
          vidOnLeft={false}
          github="https://github.com/mpgelber7495/adhouse-platform"
          githubPrivate={true}
          medium="https://medium.com/@mpgelber7495/adhouse-why-we-built-it-2d1e3cf24930"
          demoLink="https://adhouse-platform.appspot.com/"
          videoLink="https://storage.googleapis.com/adhouse-demo-videos/Buying%20ads%20on%20AdHouse.mp4"
          projectDescription={
            <React.Fragment>
              <p>
                AdHouse allows health care practices to leverage powerful,
                tactically-targeted digital advertising.
              </p>
              <h3 className="technologies-used">Technologies Used</h3>
              <p>
                ReactJS, Node w/ Express, Google App Engine, Google Vision API,
                Google Places API, Google KMS, Google CI/CD, PostgresSQL,
                Stripe, AppNexus, Prerender.io, Contentful, Algolia
              </p>
            </React.Fragment>
          }
        />
        <CodingProject
          projectName="Wise Crack"
          vidOnLeft={false}
          github="https://github.com/mpgelber7495/wise-crack"
          githubPrivate={false}
          medium="https://medium.com/@mpgelber7495/building-a-multi-player-game-using-firebase-instead-of-a-server-9edbdc397696"
          demoLink="https://mpgelber7495.github.io/wise-crack/"
          videoLink="https://storage.googleapis.com/adhouse-demo-videos/wisecrack-demo.mp4"
          projectDescription={
            <React.Fragment>
              {/* <h3>Overview</h3> */}
              <p>
                Wise Crack is a multi-player game that is similar to the popular
                game, Cards Against Humanity, but players enter their own
                phrases.
              </p>
              <h3 className="technologies-used">Technologies Used</h3>
              <p>Firebase Cloud Firestore, JQuery, Bootstrap, CardCast API</p>
            </React.Fragment>
          }
        />
        <CodingProject
          projectName="Meme-Me"
          vidOnLeft={false}
          github="https://github.com/mpgelber7495/meme-me"
          githubPrivate={false}
          demoLink="https://meme-me-app.herokuapp.com/"
          videoLink="https://storage.googleapis.com/adhouse-demo-videos/Meme-ME%20(1).webm"
          projectDescription={
            <React.Fragment>
              <p>
                Meme-me is a social platform where users can upload images they
                think will make good memes to get ideas for captions.
              </p>
              <h3 className="technologies-used">Technologies Used</h3>
              <p>
                Nodejs, Auth0, Passport.js, Sequelize, Handlebars, MySQL,
                Heroku, Expressjs
              </p>
            </React.Fragment>
          }
        />
        <div className="secondary-heading-container">
          <h2>Words</h2>
        </div>
        <WritingLink
          title="How to Change Link Previews (Open Graph) with a Client-Side Rendered React App Using React Helmet and Prerender.io"
          link="https://medium.com/@mpgelber7495/how-to-change-link-previews-open-graph-with-a-client-side-rendered-react-app-using-react-helmet-ab2a5e2059f7"
        ></WritingLink>
        <WritingLink
          title="A Step-by-Step Guide to Setting Up Selenium-webdriver with Node.js"
          link="https://medium.com/@mpgelber7495/a-step-by-step-guide-to-setting-up-selenium-webdriver-with-node-js-1167bca35c38"
        ></WritingLink>
        <WritingLink
          title="AdHouse — Why We Built It"
          link="https://medium.com/@mpgelber7495/adhouse-why-we-built-it-2d1e3cf24930"
        ></WritingLink>
        <WritingLink
          title="Building a Multi-Player Game Using Firebase Instead of a Server"
          link="https://medium.com/@mpgelber7495/building-a-multi-player-game-using-firebase-instead-of-a-server-9edbdc397696"
        ></WritingLink>
        <WritingLink
          title="How Mike Gelber Turned a Final Project Into a Fully Fledged Company (Not Author)"
          link="https://bootcamp.cvn.columbia.edu/blog/how-mike-gelber-turned-a-final-project-into-a-fully-fledged-company/"
        ></WritingLink>
        <WritingLink
          title="Contributions to Industrial Microbiology Research"
          link="https://www.researchgate.net/scientific-contributions/Michael-Gelber-2030144237"
        ></WritingLink>
      </Container>
    );
  }
}

export default Code;
