import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [details, setDetails] = useState('');

  const onSubmit = () => {
    if (!username || !password) {
      setDetails('missing username or password');
      return;
    }
    setDetails(`username: ${username} password: ${password}`);
    setUsername('');
    setPassword('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input value={username} type="text" onChange={(event) => setUsername(event.target.value)} />
        <input value={password} type="password" onChange={(event) => setPassword(event.target.value)} />
        <button type="submit" onClick={onSubmit}>submit</button>
        <label>{details}</label>
      </header>
    </div>
  );
}

export default App;
