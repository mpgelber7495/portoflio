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
          vidOnLeft={true}
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
        <CodingProject
          projectName="Wise Crack"
          vidOnLeft={false}
          github="https://github.com/mpgelber7495/wise-crack"
          githubPrivate={false}
          medium="https://medium.com/@mpgelber7495/building-a-multi-player-game-using-firebase-instead-of-a-server-9edbdc397696"
          demoLink="https://mpgelber7495.github.io/wise-crack/"
          videoLink="/assets/videos/wisecrack-demo.mp4"
          projectDescription={
            <React.Fragment>
              <h3>Overview</h3>
              <p>
                Wise Crack is a multi-player game that is similar to the popular
                game, Cards Against Humanity, but players enter their own
                phrases.
                <br />
                <br /> Wise Crack was a group project for the Columbia Full
                Stack Bootcamp. We hadn't yet learned about building
                servers/APIs so we got creative and leveraged some interesting
                Firebase functions that are powered by websockets.
                <br />
                <br /> I strongly recommend reading the Medium article to
                understand how we made this game work without a server.
              </p>
              <h3>Technologies Used</h3>
              <p>Firebase Cloud Firestore, JQuery, Bootstrap, CardCast API</p>
            </React.Fragment>
          }
        />
        <CodingProject
          projectName="Meme-Me"
          vidOnLeft={true}
          github="https://github.com/mpgelber7495/meme-me"
          githubPrivate={false}
          demoLink="https://meme-me-app.herokuapp.com/"
          videoLink="/assets/videos/meme-demo.webm"
          projectDescription={
            <React.Fragment>
              <h3>Overview</h3>
              <p>
                Meme-me is another bootcamp project. It's a social platform
                where users can upload an image and allow other users to create
                suggest meme caption ideas for the pictures.
                <br />
                <br /> Meme-me utilizes a customized Auth0 integration
                <br />
                <br /> I strongly recommend reading the Medium article to
                understand how we made this game work without a server.
              </p>
              <h3>Technologies Used</h3>
              <p>
                Nodejs, Auth0, Passport.js, Sequelize, Handlebars, MySQL,
                Heroku, Expressjs
              </p>
            </React.Fragment>
          }
        />
      </Container>
    );
  }
}

export default Code;
