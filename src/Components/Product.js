import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        const { productData, handleClickProduct } = this.props;
        return (
            <Link to="/Details" className="product" onClick={()=> handleClickProduct(productData.id)}>
                <div className="product__display">
                    <img className="product__img" src={productData.img}></img>
                    {
                        productData.inCart ?  
                            <Link to="/Cart"><ProductIcon>In Cart</ProductIcon></Link>:
                            <ProductIcon><i className="fas fa-shopping-cart"></i></ProductIcon>
                    }
                </div>

                <div className="product__info">
                    <h3 className="product__title">{productData.title}</h3>
                    <h3 className="product__price">{productData.price}$</h3>
                </div>
            </Link>
        )
    }
}

const ProductIcon = styled.span`
    font-size:1.5rem;
    background-color: var(--sideOrange);
    color:var(--mainWhite);
    padding: 0.2rem 0.7rem;
    border-radius:0.2rem;
    position:absolute;
    bottom:0;
    right:0;
    transform: translate(100%, 100%);
    transition: transform 0.2s;
`;