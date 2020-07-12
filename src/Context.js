import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const productContext = React.createContext();
// 1. React.createContext() has provider. 
// 2. React.createContext() has consumer. 

export class ProductProvider extends Component{
    state = {
        storeProducts: storeProducts,
        detailProduct: detailProduct,
        cart: [],
        showModal: false,
        subTotal: 0,
        total: 0,
        tax: 0
    }

    calculateAmount = () => {
        let subTotal = 0;
        this.state.cart.forEach(cartItem => subTotal += cartItem.price * cartItem.count);
        const tax = (subTotal * 0.1).toFixed(2);
        const total = subTotal + tax;

        this.setState({
            subTotal: subTotal,
            total: total,
            tax: tax
        });
    }

    handleClickProduct = (id) => {
        const productIndex = id - 1;
        const newDetailProduct = {...this.state.storeProducts[productIndex]};

        this.setState({
            detailProduct: newDetailProduct
        });
    }

    addToCart = (id) => {
        const product = {...this.state.storeProducts[id - 1]};
        product.inCart = true;
        product.count++;
        const newStoreProducts = this.state.storeProducts.map(curProduct => {
            return (curProduct.id === id ? product : curProduct);
        });
        const newCart = [...this.state.cart, product];

        this.setState({
            storeProducts: newStoreProducts,
            cart: newCart
        }, this.calculateAmount);
    }

    openModal = () => {
        this.setState({showModal: true});
    }

    closeModal = () => {
        this.setState({showModal: false});
    }

    removeItem = (id) => {
        const item = {...this.state.storeProducts[id - 1]};
        item.inCart = false;
        item.count = 0;
        const newCart = this.state.cart.filter(cartItem => cartItem.id !== id);
        const newStoreProducts = this.state.storeProducts.map(product => product.id === id? item : product );

        this.setState({
            cart: newCart,
            storeProducts: newStoreProducts
        }, this.calculateAmount);
    }

    clearCart = () =>{
        const newStoreProducts = this.state.storeProducts.map(product =>{
                product.inCart = false;
                product.count = 0;
                return {...product}
            });
        const newCart = [];

        this.setState({
            storeProducts: newStoreProducts,
            cart: newCart
        }, this.calculateAmount);
    }

    increment = (id) =>{
        const item = {...this.state.cart.find(cartItem => cartItem.id === id)};
        item.count++;
        const newCart = this.state.cart.map(cartItem => cartItem.id === id ? item : cartItem);

        this.setState({
            cart: newCart
        }, this.calculateAmount);
    }

    decrement = (id) => {
        const item = {...this.state.cart.find(cartItem => cartItem.id === id)};
        if(item.count > 1){
            item.count--;
            const newCart = this.state.cart.map(cartItem => cartItem.id === id ? item : cartItem);
            this.setState({
                cart: newCart
            }, this.calculateAmount);
        }
        else{
            this.removeItem(id);
            this.calculateAmount();
        }
    }

    render(){
        const finalProduct = {
            storeProducts: this.state.storeProducts,
            detailProduct: this.state.detailProduct,
            handleClickProduct: this.handleClickProduct,
            addToCart: this.addToCart,
            showModal: this.state.showModal,
            openModal: this.openModal,
            closeModal: this.closeModal,
            cart: this.state.cart,
            subTotal: this.state.subTotal,
            total: this.state.total,
            tax: this.state.tax,
            removeItem: this.removeItem,
            clearCart: this.clearCart,
            increment: this.increment,
            decrement: this.decrement
        };

        return (
            <productContext.Provider value={finalProduct}>
                {
                    this.props.children
                }
            </productContext.Provider>
        );
    }
}

export const ProductConsumer = productContext.Consumer;