import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";


export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            items: []
        }

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        // update items state
        // add the item to the list
    }

    handleFormSubmissionError(error) {
        console.log(error);
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
                    <PortfolioForm 
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError} 
                    />
                </div>

                <div className="right-column">
                    { this.portfolioItems() }
                </div>
            </div>
        );
    }
}
