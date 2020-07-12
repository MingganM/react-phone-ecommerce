import React, { Component } from 'react';

export default function Title (props){
    const { titleName } = props;
    return (
        <div className="title">
            <h2 className="title__heading">{titleName}</h2>
        </div>
    );
}