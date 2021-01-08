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
      <Container fluid id="creative-body-container">
        <div>
          <h1>Creative</h1>
        </div>
        <div className="creative-heading-holder">
          <h3>Take Your Shoes Off</h3>
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
            , a popular NYC cover band. In our prime, we played one show per
            week at popular venues across New York City (i.e. Bowery Electric,
            Red Lion, The Bitter End, Arlene's Grocery, Piano's, Session 73,
            Willie McBrides) all while working full-time jobs. We're most well
            known for selling out Friday & Saturday night back-to-backs at the
            Bowery Electric with lines down the block.
            <br />
            <br />
            Take Your Shoes Off also has three singles released across all
            streaming platforms. As the manager, I booked shows, handled
            finances, marketing, merchandise sales, music distribution and
            recording logistics.
          </p>
        </div>
        <div className="ui stackable grid">
          <div className="eight wide column">
            <iframe
              src="https://open.spotify.com/embed/artist/058NPzOuHAJ8M9z1jYv98E"
              width="300"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <div className="eight wide column">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6u9eyXfMobI"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="creative-heading-holder">
          <h3>Miscellaneous</h3>
        </div>
        <div className="ui stackable grid">
          <div className="eight wide column">
            <p>I have quite a few passions outside of music:</p>
            <ul>
              <li>Painting</li>
              <li>Surfing</li>
              <li>Craigslist Trading</li>
              <li>Traveling</li>
            </ul>
          </div>
          <div className="eight wide column">
            <h4>My recent trip to Puerto Rico</h4>
            <video width="480 height=" auto controls>
              <source
                src="https://storage.googleapis.com/adhouse-demo-videos/Puerto%20Rico%20Take%203.mp4"
                type="video/mp4"
              />
              "Your browser does not support the video tag."
            </video>
          </div>
        </div>
      </Container>
    );
  }
}

export default Career;
