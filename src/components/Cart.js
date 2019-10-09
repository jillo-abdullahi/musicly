import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import getCart, { removeItemFromCart } from '../store/actions/cartAction';
import { db } from '../config/firebaseConfig';

class Cart extends Component {

    continueShopping = () => {
        this.props.history.push('/');
    }

    componentDidMount(){
        this.getCart();
    }

    getCart = () => {
        this.props.getCart();
    }

    removeFromCart = (item) => {
        const { removeItemFromCart } = this.props;
        db.collection('cart').doc(item.name).delete().then(() => {
            removeItemFromCart(item);
        });
    }

    render () {
        const { cart } = this.props
        let cartContent;
        let price = 0;

        if(cart.loading || !cart.cart){
            return ( <div></div>);
        } else {
            cartContent = cart.cart.map(item => {
                price += item.price;
                return(
                    <tr>
                        <td>{item.name}</td>
                        <td><span>$</span>{item.price}</td>
                        <td><button onClick={() => this.removeFromCart(item)}className="remove-item-btn"><FontAwesomeIcon icon={ faTimes }></FontAwesomeIcon></button></td>
                    </tr>
                )
            })
        }

        return (
            <div className="my-cart">
                <div className="container cart-container">
                    <div className="cart-header">
                        <h3 className="section-title">Your Music Cart</h3>
                    </div>
                    <div className="cart-table">
                    <table>
                        <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Item Price</th>
                            <th>Remove</th>
                        </tr>
                        </thead>

                        <tbody>
                            { cartContent }
                        </tbody>
                    </table>
                    </div>
                    <div className="cart-total">
                        <div className="item-count">
                            <span>{cart.cart.length} items in your cart</span>
                        </div>
                        <div className="cart-subtotal">
                            <span>Subtotal: $<span className="total-price">{price.toFixed(2)}</span></span>
                        </div>
                    </div>
                    <div className="cart-buttons">
                        <div className="checkout-btn">
                            <button onClick={() => this.continueShopping()}>continue shopping</button>
                        </div>
                        <div className="continue-shopping-btn">
                            <button>checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
      }
}

const mapStateToProps = (state) => {
    return {cart: state.cartItems}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCart: () => dispatch(getCart()),
        removeItemFromCart: (item) => dispatch(removeItemFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);