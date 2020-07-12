import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import Cart from './Components/Cart';
import Default from './Components/Default';
import Details from './Components/Details';
import ProductList from './Components/ProductList';
import Modal from './Components/Modal';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/Cart" component={Cart}/>
          <Route path="/Details" component={Details}/>
          <Route component={Default}/>
        </Switch>
        
        <Modal />
      </React.Fragment>
    )
  }
}
