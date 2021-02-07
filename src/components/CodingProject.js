import React, { Component } from "react";

class CodingProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui stackable grid project-container">
          <div className="sixteen wide column">
            <h2 className="coding-project-name">{this.props.projectName} </h2>
          </div>

          <div className="eight wide column">
            <div className="ui stackable grid">
              <div className="sixteen wide column">
                {this.props.projectDescription}
              </div>
            </div>
            <div className="ui stackable grid">
              <div className="five wide column">
                <a target="_blank" href={this.props.github}>
                  <h3>
                    Github
                    {this.props.githubPrivate ? (
                      <React.Fragment>
                        <br />
                        (private){" "}
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                  </h3>
                </a>
              </div>
              <div className="five wide column">
                <a target="_blank" href={this.props.medium}>
                  <h3>Medium</h3>
                </a>
              </div>
              <div className="five wide column">
                <a target="_blank" href={this.props.demoLink}>
                  <h3>Live Demo</h3>
                </a>
              </div>
            </div>
          </div>

          <div className="eight wide column">
            <video width="480 height=" auto controls>
              <source src={this.props.videoLink} type="video/mp4" />
              "Your browser does not support the video tag."
            </video>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CodingProject;
