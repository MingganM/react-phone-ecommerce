import React from 'react';

export default function CartItem({product, removeItem, increment, decrement}) {
    return (
        <div className="cart__item">
            <div className="cart__item-col">
                <span className="cart__item-heading">Product:</span>
                <span className="cart__item-value"><img src={product.img}/></span>
            </div>

            <div className="cart__item-col">
                <span className="cart__item-heading">Name:</span>
                <span className="cart__item-value">{product.title}</span>
            </div>

            <div className="cart__item-col">
                <span className="cart__item-heading">Price:</span>
                <span className="cart__item-value">{product.price}$</span>
            </div>

            <div className="cart__item-col">
                <span className="cart__item-heading">Quantity:</span>
                <span className="cart__item-value">
                    <button onClick={() => increment(product.id) } className="cart__item-btn">+</button>
                    <button className="cart__item-btn">{product.count}</button>
                    <button onClick={() => decrement(product.id) } className="cart__item-btn">-</button>
                </span>
            </div>

            <div className="cart__item-col">
                <span className="cart__item-heading">Remove:</span>
                <span className="cart__item-value"><button onClick={ ()=> removeItem(product.id) } className="delete"><i className="fas fa-trash"></i></button></span>
            </div>

            <div className="cart__item-col">
                <span className="cart__item-heading">Total:</span>
                <span className="cart__item-value">{product.price * product.count}$</span>
            </div>
        </div>
    )
}
