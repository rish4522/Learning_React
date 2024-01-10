import './App.css';
import Heading from './Heading';
import FoodItems from './FoodItems';
import Greetings from './Greetings';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
    <div className='main-container'>
      <Greetings />
      <Heading />
      <FoodItems />
    </div>
    <div className='state-container'>
      <h1>{count}</h1>
      <div className='buttons'>
        <button onClick={() => {setCount(count + 1)}}>+</button>
        <button onClick={() => {setCount(count - 1)}}>-</button>
      </div>
    </div>
    </>
  );
}

export default App;
