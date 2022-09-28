import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import init, { add } from "wasm-lib";

function App() {
  const [ans, setAns] = useState(0);
  useEffect(() => {
      init().then(() => {
        setAns(add(1, 1));
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>1 + 1 = {ans}</p>
        rust is running
      </header>
    </div>
  );
}

export default App;
