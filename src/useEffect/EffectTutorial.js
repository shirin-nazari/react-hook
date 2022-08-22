import React, { useEffect, useState } from 'react';
import axios from 'axios';
function EffectTutorial() {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);
  //   re-render it run
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        // console.log(response.data);
        setData(response.data[0].email);
        console.log('API called');
      });
  }, []);

  return (
    <div>
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default EffectTutorial;
