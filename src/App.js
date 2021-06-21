import { React, useEffect, useState } from 'react'
import logo from './logo.svg';
import Form from './Form/Form';
import Workers from './Workers/Workers';
import api from './utils/Auth';
import './App.css';

function App() {

  const [workers, setWorkers] = useState([])

  useEffect(() =>
    api.getWorkers()
      .then((workers) => {
        setWorkers(workers);
      })
      .catch((error) => console.log(error))
    , [])

  const rmWorkerBtn = (_id) => {
    console.log(_id)
    api.rmWorker(_id)
      .then(() => console.log('rmOk'))
      .catch((error) => console.log(error))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Workers
          workers={workers}
          rmWorkerBtn={rmWorkerBtn} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Form />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
