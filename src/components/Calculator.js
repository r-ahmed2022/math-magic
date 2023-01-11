/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */

/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Calculator.css';

export default class Calculator extends Component {
  render() {
    const { onclick, state, onchange } = this.props;
    // eslint-disable-next-line no-unused-vars
    const { total, next, operation } = state;
    return (
      <main className="calculator-section">
        <div className="left">
          <p>
            Let&#39;s do some math....!
          </p>
        </div>
        <div className="cal-component">
          <div className="txt-div">
            <input type="text" name="numinput" id="numinput" className="numinput" maxLength="20" value={next} placeholder={total} onChange={onchange} />
          </div>
          <div className="btn-div">
            <input type="button" className="btn" value="AC" onClick={onclick} />
            <input type="button" className="btn" value="+/-" onClick={onclick} />
            <input type="button" className="btn" value="%" onClick={onclick} />
            <input type="button" className="btn symbol" value="&divide;" onClick={onclick} />
          </div>
          <div className="btn-div">
            <input type="button" className="btn" value="7" onClick={onclick} />
            <input type="button" className="btn" value="8" onClick={onclick} />
            <input type="button" className="btn" value="9" onClick={onclick} />
            <input type="button" className="btn symbol" value="x" onClick={onclick} />
          </div>
          <div className="btn-div">
            <input type="button" className="btn" value="4" onClick={onclick} />
            <input type="button" className="btn" value="5" onClick={onclick} />
            <input type="button" className="btn" value="6" onClick={onclick} />
            <input type="button" className="btn symbol" value="-" onClick={onclick} />
          </div>

          <div className="btn-div">
            <input type="button" className="btn" value="1" onClick={onclick} />
            <input type="button" className="btn" value="2" onClick={onclick} />
            <input type="button" className="btn" value="3" onClick={onclick} />
            <input type="button" className="btn symbol" value="+" onClick={onclick} />
          </div>
          <div className="btn-div-last">
            <div className="div-0">
              <input type="button" className="btn" value="0" onClick={onclick} />
            </div>
            <div className="div-last">
              <input type="button" className="btn btn-last" value="." onClick={onclick} />
              <input type="button" className="btn symbol btn-equal" value="=" onClick={onclick} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
