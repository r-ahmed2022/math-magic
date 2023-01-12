import React from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import calculate from './logic/calculate';

export default function App() {
  const [state, setState] = React.useState({
    total: '',
    next: 0,
    operation: null,
  });

  const handleClick = (event) => {
    const data = event.target.value;
    const initialstate = calculate(state, data);
    setState(initialstate);
    document.getElementById('numinput').value = initialstate.next;
  };

  return (
    <div className="container">
      <Navbar />
      <Calculator
        onclick={handleClick}
        state={state}
      />
    </div>
  );
}
