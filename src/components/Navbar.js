import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class Landing extends Component {
  state = {
    toggleMenu: false,
    toggleCart: false
  }

  classToggle = () => this.setState({ toggleMenu: !this.state.toggleMenu });
  toggleCart = () => this.setState({ toggleCart: !this.state.toggleCart});

  render(){
    const { toggleMenu } = this.state;

    return (
      <div className="nav-bar">
        <div className="navbar-item navbar-item-left">
          <div className="nav_link brand-logo">
              Musicly<span>.</span>
          </div>
          <div className="nav_link nav-toggle" onClick={this.classToggle}>
            <FontAwesomeIcon icon={ faBars }></FontAwesomeIcon>
          </div>
        </div>
        <div className={ toggleMenu ? 'navbar-toggle-show navbar-item-right' : 'navbar-item navbar-item-right' }>
          <div className="nav_link">
            <a href="#cart">
              <div className="cart">
                <FontAwesomeIcon icon={ faShoppingCart }></FontAwesomeIcon>
                <span>1</span>
              </div>
            </a>
          </div>
        </div>


      </div>
    )
  }
}

export default Landing;
