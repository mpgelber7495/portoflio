import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Reveal, Image } from "semantic-ui-react";

class CareerObject extends Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
  }

  render() {
    return (
      <div className="career-object-container">
        <Reveal animated="move">
          <Reveal.Content visible>
            <div className="career-object-cover-slide">
              <img
                src={this.props.image}
                className="cover-image-career-object"
              />
              <h3>{this.props.title}</h3>
              <h4>{this.props.time}</h4>
            </div>
          </Reveal.Content>
          <Reveal.Content hidden>
            <h3>About the job</h3>
            {this.props.description}
          </Reveal.Content>
        </Reveal>
      </div>
    );
  }
}

export default CareerObject;
