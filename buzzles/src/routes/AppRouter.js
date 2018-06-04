import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import Locations from '../Components/LocationsPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Route path="/" component={Header} exact={true} />
        <Route path="/Locations" component={Locations} exact={true} />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
