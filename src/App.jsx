import { useState, useEffect } from 'react'
import './App.css'

import Card from './components/Card.jsx'
import cardData from './assets/data.json'

const App = () => {
  const [data, setData] = useState(cardData);
  const [dataIndex, setDataIndex] = useState(0);

  const currData = data[dataIndex];

  const handleIndex = () => {
    setDataIndex(
      prevIndex =>
        // React passes the last dataIndex to preIndex here automatically
        // if prevIndex is out of bound, loop back to the first flashcard
        Math.floor(Math.random() * data.length)
    );
  }


  return (
    <>
      <h1>The Ultimate Python God!</h1>
      <h3>How good at Python are you? Test all of your Python knowledge here!</h3>
      <h4>Number of cards: 10</h4>
      <Card cardData={currData}></Card>
      <button onClick={handleIndex}>→</button>
    </>
  )
}

export default App;
