import React, { useState } from 'react';

function StateTutorial() {
  /* ------------------ // use variable in react don`t change ----------------- */
  //   let counter = 0;
  //   const increment = () => {
  //     counter = counter + 1;
  //     // here it was working in terminal and don`t show in view pages
  //     console.log(counter);
  //   };
  //   return (
  //     <div>
  //       {counter}
  //       {/* it is don`t work because you should useState */}
  //       <button onClick={increment}>Increment</button>
  //     </div>
  //   );

  //   const [counter, setCounter] = useState(0);
  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };
  //   return (
  //     <div>
  //       {counter}
  //       <button onClick={increment}>Increment</button>
  //     </div>
  //   );

  /* ------------------------------- change code ------------------------------ */
  const [inputValue, setInputValue] = useState('pedro');
  const changeValue = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input placeholder="write something..." onChange={changeValue} />
      {inputValue}
    </div>
  );
}

export default StateTutorial;
