import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import CareerObject from "./CareerObject";

class Creative extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid id="creative-body-container">
        <div>
          <h1>Creative.</h1>
        </div>
        <div className="creative-container">
          <div>
            <p>
              This section is meant to showcase that while I have a deep passion
              for working, coding, building and learning, I also enjoy being a
              human and doing fun stuff outside of the office.
            </p>
          </div>
        </div>
        <div className="creative-container">
          <div className="creative-heading-holder">
            <h2>Take Your Shoes Off</h2>
          </div>
          <div>
            <p className="tyso-description">
              I am the bass guitarist and manager of{" "}
              <a
                href="https://mpgelber7495.github.io/take-your-shoes-off/"
                target="_blank"
              >
                Take Your Shoes Off
              </a>
              , a popular NYC cover band. In our prime (pre-COVID), we played ~1
              show per week at popular venues across New York City (i.e. Bowery
              Electric, Red Lion, The Bitter End, Arlene's Grocery, Piano's,
              Session 73) all while working full-time jobs.
              <br />
              <br />
              Take Your Shoes Off also has three publicly released singles. As
              the manager, I booked shows, handled finances, marketing,
              merchandise sales, music distribution and recording logistics.
              <br />
              <br />
              Check out some highlights of the "TYSO" experience below.
            </p>
            <br />
          </div>
          <div className="ui stackable grid">
            <div className="eight wide column">
              <iframe
                src="https://open.spotify.com/embed/artist/058NPzOuHAJ8M9z1jYv98E"
                // width="300"
                // height="380"
                height="100%"
                width="100%"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
            <div className="eight wide column iframe-container">
              <iframe
                // width="560"
                // height="315"
                height="100%"
                width="100%"
                src="https://www.youtube.com/embed/6u9eyXfMobI"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex-center">
          <div className="career-object-divider creative-object-divider "></div>
        </div>
        <div className="creative-container">
          <div className="creative-heading-holder">
            <h2>The Other Stuff...</h2>
          </div>
          <div className="ui stackable grid">
            <div className="eight wide column">
              <p className="tyso-description">
                {" "}
                I have quite a few other interesting passions:
              </p>
              <ul>
                <li>Videography/Editing</li>
                <li>Surfing</li>
                <li>Craigslist Trading</li>
                <li>Traveling</li>
                <li>Painting</li>
                <li>All Things Music</li>
                <li>Learning About Machine Learning</li>
                <li>Crypto Trading Bots</li>
                <li>Math</li>
              </ul>
            </div>
            <div className="eight wide column">
              <p className="travel-vid-description">Exploring Costa Rica</p>
              <video width="480 height=" className="travel-video" auto controls>
                <source
                  src="https://storage.googleapis.com/mikes-vids/Costa%20Rica%20Tamarindo%20FINAL%20CUT.mp4"
                  type="video/mp4"
                />
                "Your browser does not support the video tag."
              </video>
            </div>
            <div className="eight wide column"></div>
            <div className="eight wide column">
              <p className="travel-vid-description">Surfing in Puerto Rico</p>
              <video width="480 height=" className="travel-video" auto controls>
                <source
                  src="https://storage.googleapis.com/adhouse-demo-videos/Puerto%20Rico%20Take%203.mp4"
                  type="video/mp4"
                />
                "Your browser does not support the video tag."
              </video>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Creative;
