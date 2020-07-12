import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import Title from './Title';
import CartItem from './CartItem';

export default class Cart extends Component {
    render() {
        return (
            <section className="cart">
                <Title titleName="Your Cart"/>

                <ProductConsumer>
                    {
                        value => {
                            const {cart, total, subTotal, tax, removeItem, clearCart, increment, decrement} = value;
                            return (
                                <div>
                                    { cart.map(item => <CartItem 
                                                        increment={increment}
                                                        decrement={decrement} 
                                                        removeItem={removeItem} 
                                                        key={item.id} 
                                                        product={item}/>
                                        ) 
                                    }
                                    
                                    <div className="cart__footer">
                                        <span onClick={clearCart} className="cart__clear">Clear Cart</span>
                                        <p className="cart__subTotal">SubTotal: {subTotal}</p>
                                        <p className="cart__tax">Tax: {tax}</p>
                                        <p className="cart__total">Total: {total}</p>
                                    </div>
                                </div>
                            );
                        }
                    }
                </ProductConsumer>
            </section>
        )
    }
}
