import React, { Component } from "react";

class WritingLink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <a target="_blank" href={this.props.link}>
            <li className="words-title">
              <i className="quote left icon"></i>
              {this.props.title}
              <i className="quote right icon"></i>
            </li>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default WritingLink;
