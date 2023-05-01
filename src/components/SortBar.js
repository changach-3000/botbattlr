import React,{useState} from 'react';

function SortBar({ bots, setBots }) {
  const [sorted, setSorted]=useState([])
 
  const sortBotsByHealth = () => {
    const sortedBots = bots.sort((a, b) => a.health - b.health);
    setBots(sortedBots);
    setSorted(sortedBots);
  };
  return (
    <div className="sort-bar">
    <button id="sort-btn" onClick={sortBotsByHealth}>Sort by Health</button>
       </div>
  );
}

export default SortBar;