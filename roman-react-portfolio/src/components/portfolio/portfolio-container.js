import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();
    }

    portfolioItems() {
        const data = ["Quip", "Evenbright", "Ministry Safe", "SwingAway"];

        return data.map(item => {
            return <PortfolioItem tite={item} url={"google.com"} />;
        })
    }

    render() {
        return (
            <div>
                <h2>Portfolio items go here...</h2>
                { this.portfolioItems() }
            </div>
        )
    }
}