import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <Routes>
          <Route
            path="/Calculator"
            element={
              <Calculator onclick={this.handleClick} state={this.state} />
}
          />
          <Route
            path="*"
            element={
              <Calculator onclick={this.handleClick} state={this.state} />
}
          />
        </Routes>
      </div>
    );
  }
}
