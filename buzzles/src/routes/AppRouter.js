import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';

import Locations from '../Components/LocationsPage';
import Storefront from '../Components/Locations/Storefront';
import CandyShop from '../Components/Locations/CandyShop';
import Lighthouse from '../Components/Locations/Lighthouse';
import IceBarn from '../Components/Locations/IceBarn';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Route path="/" component={Header} exact={true} />
        <Route path="/Locations" component={Locations} exact={true} />
        <Route path="/Storefront" component={Storefront} exact={true} />
        <Route path="/CandyShop" component={CandyShop} exact={true} />
        <Route path="/Lighthouse" component={Lighthouse} exact={true} />
        <Route path="/IceBarn" component={IceBarn} exact={true} />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
