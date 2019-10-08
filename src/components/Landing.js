import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';

class Landing extends Component {
  render(){
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default Landing;
