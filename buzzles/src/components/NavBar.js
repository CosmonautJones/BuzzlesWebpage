import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Menu } from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
      <Menu inverted>
        <Menu.Item name="Home" onClick={console.log('hey')} />
        <Menu.Item name="Home" onClick={console.log('hey')} />
      </Menu>
    );
  }
}

export default NavBar;
