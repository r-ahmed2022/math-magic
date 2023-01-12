import React from 'react';

export default function Calculator(props) {
  const { onclick, state } = props;
  const { total, next } = state;
  return (
    <div className="cal-component">
      <div className="txt-div">
        <input type="text" name="numinput" id="numinput" className="numinput" maxLength="20" value={next} placeholder={total} />
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
  );
}
