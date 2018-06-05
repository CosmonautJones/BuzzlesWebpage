import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" component={Header} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
