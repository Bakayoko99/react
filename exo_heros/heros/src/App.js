import React, { useEffect, useState } from 'react';

const axios = require('axios')

function App() {

  const [heroes, setHeroes] = useState([])

  useEffect(() => {

    axios.get('http://localhost:8098/heroes')
      .then(res => {
        setHeroes(heroes.push(res.data))
        console.log('heroes axios get: ', res.data)
      })

  }, []);

  console.log("state heroes: ", heroes);
  return (
    <div >
      <h1>{heroes}</h1>

    </div>
  );
}

export default App;
