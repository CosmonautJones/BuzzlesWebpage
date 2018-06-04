import React, { Component } from 'react';
import Footer from './Components/layout/Footer';
import LocationsPage from './Components/LocationsPage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Buzzles</h1>
        </header>
        <LocationsPage />
        <Footer />
      </div>
    );
  }
}

export default App;
