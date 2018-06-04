import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
