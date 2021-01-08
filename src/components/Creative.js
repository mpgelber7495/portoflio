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
        <div className="tyso-holder">
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
            Willie McBrides).
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
      </Container>
    );
  }
}

export default Career;
