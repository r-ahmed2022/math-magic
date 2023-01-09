import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import calculate from './logic/calculate';
import Home from './components/Home';
import Quote from './components/Quote';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: 0,
      operation: null,
    };
  }

    handleClick = (event) => {
      const data = event.target.value;
      const state = calculate(this.state, data);
      this.setState(state);
      document.getElementById('numinput').value = state.next;
    };

    render() {
      return (
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Calculator"
              element={
                // eslint-disable-next-line react/jsx-wrap-multilines, react/jsx-first-prop-new-line
                <Calculator onclick={this.handleClick} state={this.state} />
}
            />
            <Route path="/Quote" element={<Quote />} />
          </Routes>
        </div>
      );
    }
}
