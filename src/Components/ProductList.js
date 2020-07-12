import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import Product from './Product';
import Title from './Title';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <Title titleName="Our Products"/>

                <section className="products">
                    <ProductConsumer>
                        {
                            function(value){
                                const { storeProducts, handleClickProduct, addToCart } = value;
                                return storeProducts.map(function(product){
                                    
                                    return (
                                        <Product 
                                            key={product.id} 
                                            productData={product}
                                            handleClickProduct={handleClickProduct}
                                         />
                                    );
                                });
                            }
                        }
                    </ProductConsumer>
                </section>
            </React.Fragment>
        )
    }
}
