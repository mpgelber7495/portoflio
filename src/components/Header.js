import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary stackable>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          id="menu-item-with-logo"
        >
          <img id="header-logo" src="/assets/images/horizontal-logo.png" />
          Mike Gelber
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="editorials"
            active={activeItem === "editorials"}
            onClick={this.handleItemClick}
          >
            Editorials
          </Menu.Item>

          <Menu.Item
            name="reviews"
            active={activeItem === "reviews"}
            onClick={this.handleItemClick}
          >
            Reviews
          </Menu.Item>

          <Menu.Item
            name="upcomingEvents"
            active={activeItem === "upcomingEvents"}
            onClick={this.handleItemClick}
          >
            Upcoming Events
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
