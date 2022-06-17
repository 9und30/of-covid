import './App.css';

import { useState } from 'react';
import { useEffect } from 'react';

import Axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  const getData = () => {
    Axios
    .get('https://api.corona-zahlen.org/districts/06413')
    .then(res => {
      let collectedData = res.data.data['06413'];
      let data = {
        cases: collectedData.cases.toFixed(1),
        weekIncidence: collectedData.weekIncidence.toFixed(1),
        deaths: collectedData.deaths.toFixed(1)
      };
      console.log(data)
      setData(data);
    })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title">Offenbach Covid Stats</h1>
      </div>

      <div className="content">
        <div className="stats-container">
          <p className="number">{data.cases}</p>
          <h2 className="property">Fälle</h2>
        </div>
        <div className="stats-container">
          <p className="number">{data.weekIncidence}</p>
          <h2 className="property">7-Tage Inzidenz</h2>
        </div>
        <div className="stats-container">
          <p className="number">{data.deaths}</p>
          <h2 className="property">Tode</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
