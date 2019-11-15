import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio/portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Roman's Portfolio</h1>
        <div>
          { moment().format('MMMM Do YYYY, h:mm:ss a') }
        </div>
        <PortfolioContainer />
      </div>
    );
  }
}