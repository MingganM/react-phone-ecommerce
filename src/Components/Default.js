import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        const {location: { pathname } } = this.props;
        return (
            <div className="default">
                <h2 className="default__title">
                    <span className="Error">ERROR 404:</span>
                </h2>
                <p className="default__text">{pathname} page could not be found, Either the path is incorrect or the service is no longer available.</p>
            </div>
        )
    }
}
