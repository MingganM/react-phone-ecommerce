import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import Title from './Title';
import { NewBtn } from './Nav';
import { Link } from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    function(value){
                        const { detailProduct, addToCart, openModal } = value;
                        
                        return (
                            <section className="details">
                                <Title titleName={detailProduct.title}/>

                                <div className="details__container">
                                    <div className="details__img">
                                        <img src={detailProduct.img} className="details__img-img"/>
                                    </div>

                                    <div className="details__info">
                                        <h3 className="details__title">Model: {detailProduct.title}</h3>
                                        <h3 className="details__company">Made By: {detailProduct.company}</h3>
                                        <h3 className="details__price">Price: {detailProduct.price}$</h3>
                                        <p className="details__text">Some Info About Product: {detailProduct.info}</p>

                                        <Link to="/">
                                            <NewBtn>To Products</NewBtn>
                                        </Link>
                                        <NewBtn inCart={detailProduct.inCart}>
                                            {detailProduct.inCart ? <Link to="/Cart">To Cart</Link> : <Link onClick={()=> {addToCart(detailProduct.id); openModal()}}>Add To Cart</Link>}
                                        </NewBtn>
                                    </div>
                                </div>
                            </section>
                        );
                    }
                }
            </ProductConsumer>
        )
    }
}
