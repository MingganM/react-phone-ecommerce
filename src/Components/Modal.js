import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const { showModal, detailProduct, closeModal } = value;
                        return showModal ? ( 
                            <div className="modal">
                                <div className="modal__container">
                                    <h3 class="modal__title">This Item Was Successfully Added To The Cart.</h3>

                                    <div className="modal__img">
                                        <img src={detailProduct.img}/>
                                    </div>

                                    <div className="modal__product-info">
                                        <h3 className="modal__product-title">{detailProduct.title}</h3>
                                        <h3 className="modal__product-price">{detailProduct.price}$</h3>
                                    </div>

                                    <div className="modal__navigate">
                                        <Link onClick={closeModal} className="modal__navigate-link" to="/">Continue Shopping</Link>
                                        <Link onClick={closeModal} className="modal__navigate-link" to="/Cart">Go To Cart</Link>
                                    </div>
                                </div>
                            </div>
                        ) : ( null );
                    }
                }
            </ProductConsumer>
            
        )
    }
}
