import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";


export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            items: []
        }
    }

    getPortfolioItems() {
        axios.get("https://romanlavery.devcamp.space/portfolio/portfolio_items", { withCredentials: true })
          .then(response => {
            this.setState({
                items: [...response.data.portfolio_items]
            })
          })
          .catch(error => {
            console.log(error);
          });
    }

    portfolioItems() {

        return this.state.items.map(item => {
            return <PortfolioSidebarList
                        data={this.state.items} />;
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <h1>form</h1>
                </div>

                <div className="right-column">
                    { this.portfolioItems() }
                </div>
            </div>
        );
    }
}
