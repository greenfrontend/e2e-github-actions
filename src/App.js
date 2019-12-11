import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return <div className="main" style={{margin: 50}}>
    <div className="button-wrapper">
      <button className="button" onClick={() => setCount(count + 1)}>increase</button>
    </div>
    <h3 className="result">{count}</h3>
  </div>
};

export default App;
