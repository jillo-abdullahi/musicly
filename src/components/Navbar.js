import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import getCart from '../store/actions/cartAction';

class Landing extends Component {
  state = {
    toggleMenu: false
  }

  componentDidMount(){
    this.props.getCart();
  }

  classToggle = () => this.setState({ toggleMenu: !this.state.toggleMenu });
  viewCart = () => { this.props.history.push('/cart'); }

  render(){
    const { toggleMenu } = this.state;
    const { cart }= this.props;

    return (
      <div className="nav-bar">
        <div className="navbar-item navbar-item-left">
          <div className="nav_link brand-logo">
            <Link to="/">Musicly<span>.</span></Link>
          </div>
          <div className="nav_link nav-toggle" onClick={this.classToggle}>
            <FontAwesomeIcon icon={ faBars }></FontAwesomeIcon>
          </div>
        </div>
        <div className={ toggleMenu ? 'navbar-toggle-show navbar-item-right' : 'navbar-item navbar-item-right' }>
          <div className="nav_link" onClick={() => this.viewCart()}>
              <Link to="/cart">
                <div className="cart">
                  <FontAwesomeIcon icon={ faShoppingCart }></FontAwesomeIcon>
                  <span>{cart.cart.length}</span>
                </div>
              </Link>
          </div>
        </div>


      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cartItems
});

const mapDispatchToProps = (dispatch) => {
  return {
      getCart: () => dispatch(getCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
