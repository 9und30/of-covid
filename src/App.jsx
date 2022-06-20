import './App.css';

import { useState } from 'react';
import { useEffect } from 'react';

import Axios from 'axios';
import CountUp from 'react-countup';

function App() {

  const [data, setData] = useState([]);

  const getData = () => {
    Axios
    .get('https://api.corona-zahlen.org/districts/06413')
    .then(res => {
      let collectedData = res.data.data['06413'];
      let data = {
        cases: collectedData.cases,
        weekIncidence: collectedData.weekIncidence,
        deaths: collectedData.deaths
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
          <CountUp className="number" decimals={1} decimal="." start={0} end={data.cases} duration={2.5} />
          <h2 className="property">Fälle</h2>
        </div>
        <div className="stats-container">
          <CountUp className="number" decimals={1} decimal="." start={0} end={data.weekIncidence} duration={1.75} />
          <h2 className="property">7-Tage Inzidenz</h2>
        </div>
        <div className="stats-container">
          <CountUp className="number" decimals={1} decimal="." start={0} end={data.deaths} duration={1.25} />
          <h2 className="property">Tode</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
