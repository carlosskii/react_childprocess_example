import './App.css';
import logo from './logo.png';
import { useState } from 'react';

const API = "http://localhost:5000";

function App() {

  const [result, setResult] = useState(null);

  const readLs = async () => {
    const response = await fetch(`${API}/ls`);
    const data = await response.json();
    setResult(data.files);
  };

  const readArray = async () => {
    const response = await fetch(`${API}/array`);
    const data = await response.json();
    setResult(data.array);
  };

  return (
    <div className="App">
      <img src={logo} alt="logo"
      className="App__logo" />
      <h1>My React App</h1>
      <div className="App__buttons">
        <button className="App__button"
        onClick={readLs}>
          Get Directory Structure
        </button>
        <button className="App__button"
        onClick={readArray}>
          Get Numpy Array
        </button>
      </div>
      <p>
        <code>
          {result}
        </code>
      </p>
    </div>
  );
}

export default App;