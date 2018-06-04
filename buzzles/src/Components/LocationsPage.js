import React, { Component } from 'react';
import Storefront from './Locations/Storefront'
import IceBarn from './Locations/IceBarn'
import CandyShop from './Locations/CandyShop'
import LightHouse from './Locations/Lighthouse'

class Locations extends Component {
  render() {
    return (
      <div>
        <Storefront />
        <IceBarn />
        <CandyShop />
        <LightHouse />
      </div>
    )
  }
}

export default Locations;