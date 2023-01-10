import React, { Component } from 'react';
import './Calculator.css';

export default class Calculator extends Component {
  render() {
    const {
      onclick, total, next, onchange,
    } = this.props;

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
            <input type="button" className="btn" value="AC" />
            <input type="button" className="btn" value="+/-" />
            <input type="button" className="btn" value="%" />
            <input type="button" className="btn symbol" value="&divide;" />
          </div>
          <div className="btn-div">
            <input type="button" className="btn" value="7" />
            <input type="button" className="btn" value="8" />
            <input type="button" className="btn" value="9" />
            <input type="button" className="btn symbol" value="x" onClick={onclick} />
          </div>
          <div className="btn-div">
            <input type="button" className="btn" value="4" />
            <input type="button" className="btn" value="5" />
            <input type="button" className="btn" value="6" />
            <input type="button" className="btn symbol" value="-" />
          </div>

          <div className="btn-div">
            <input type="button" className="btn" value="1" />
            <input type="button" className="btn" value="2" />
            <input type="button" className="btn" value="3" />
            <input type="button" className="btn symbol" value="+" />
          </div>
          <div className="btn-div-last">
            <div className="div-0">
              <input type="button" className="btn" value="0" />
            </div>
            <div className="div-last">
              <input type="button" className="btn btn-last" value="." />
              <input type="button" className="btn symbol btn-equal" value="=" />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
