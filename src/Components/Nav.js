import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

export default class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <Link to="/">
                    <img src={logo} alt="LOGO" className="nav__logo"></img>
                </Link>
                <Link to="/" className="nav__product">Products</Link>
                
                <Link to="/Cart" className="nav__cart">
                    <Btn><i className="fas fa-shopping-cart"></i> Cart</Btn>
                </Link>
            </nav>
        )
    }
}

export const Btn = styled.button`
    background-color: transparent;
    border: 1.5px solid var(--mainWhite);
    color: var(--mainWhite);
    padding: 0.3rem 0.6rem;
    border-radius: 0.2rem;
    cursor: pointer;
    font-weight: 500;
    font-size:1.1rem;
    transition: background-color 0.2s, color 0.2s;

    &:hover{
        background-color: var(--mainWhite);
        color: var(--mainOrangeRed);
    }
`;

export const NewBtn = styled.button`
    background-color: transparent;
    border: 1.5px solid ${props => props.inCart ?  "var(--sideOrange)" : "var(--mainOrangeRed)"};
    color: ${props => props.inCart ?  "var(--sideOrange)" : "var(--mainOrangeRed)"};
    padding: 0.3rem 0.6rem;
    border-radius: 0.2rem;
    cursor: pointer;
    font-weight: 500;
    font-size:1.1rem;
    margin: 1rem 0.5rem;
    display:inline-block;
    transition: background-color 0.2s, color 0.2s;

    &:hover{
        background-color: ${props => props.inCart ?  "var(--sideOrange)" : "var(--mainOrangeRed)"};
        color: var(--mainWhite);
    }

    & a{
        color: inherit;
    }
`;