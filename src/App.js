import React, { useEffect, useState } from "react";
import NavBar from './components/NavBar.jsx'
const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <NavBar/>
      <h1>Sample Counter</h1>
      <h3>This is a sample react app</h3>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(prev => prev + 1)}>+</button>
      <button onClick={() => setCounter(prev => prev-1)}>-</button>
    </div>);
};

export default App;