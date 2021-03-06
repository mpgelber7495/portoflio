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
          <div className="eight wide column">
            <div className="sixteen wide column">
              <h2 className="coding-project-name">{this.props.projectName} </h2>
            </div>
            <div className="ui stackable grid">
              <div className="sixteen wide column">
                {this.props.projectDescription}
              </div>
            </div>
            <div className="ui stackable grid">
              <div className="five wide column">
                <a target="_blank" href={this.props.github}>
                  <button className="ui active button primary">
                    <i className="coding-project-icon github  square icon"></i>
                    The Code
                  </button>
                  {/* <h3>
                    The Code
                    {this.props.githubPrivate ? (
                      <React.Fragment>
                        <br />
                        (private){" "}
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                  </h3> */}
                </a>
              </div>
              <div className="five wide column">
                <a target="_blank" href={this.props.medium}>
                  {/* <h3>Read About It</h3>
                   */}
                  <button className="ui active button primary">
                    <i className="coding-project-icon medium  icon"></i>
                    The Story
                  </button>
                </a>
              </div>
              <div className="five wide column">
                <a target="_blank" href={this.props.demoLink}>
                  {/* <h3>Try It</h3> */}
                  <button className="ui active button primary">
                    <i className="coding-project-icon cogs icon  "></i>
                    Live App
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="eight wide column">
            <video
              width="480 height="
              className="coding-project-video"
              auto
              controls
            >
              <source src={this.props.videoLink} type="video/mp4" />
              "Your browser does not support the video tag."
            </video>
          </div>
        </div>
        <div className="flex-center">
          <div className="career-object-divider coding-section-divider"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default CodingProject;
