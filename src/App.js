import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-icon-container">
          <i className="fas fa-smile-beam App-icon"></i>
        </div>
        <h1>Hello, World!</h1>
        <p>Welcome to my React app.</p>
        <button className="App-button">Click Me</button>
        <nav>
          <ul className="App-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
