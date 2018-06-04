import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Menu } from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
      <Menu inverted>
        <Menu.Item>
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/Locations">Locations</NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
