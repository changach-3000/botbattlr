import React,{useState,useEffect} from 'react'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

function RenderBots() {
//create a state for the bots
const [bots, setBots] =useState([])
const [army, setArmy] = useState([]);

const setArmyHandler = (bot) => {
  const newArmy = army.filter((b) => b.id !== bot.id);
  setArmy([...newArmy, bot]);
  const newBots = bots.filter((b) => b.id !== bot.id);
  setBots(newBots);
};

const removeArmyHandler = (bot) => {
  const newArmy = army.filter((b) => b.id !== bot.id);
  setArmy(newArmy);
};

// Get Bots and render them into bot collection
  useEffect(()=>{
      fetch("http://localhost:3000/bots")
      .then(res => res.json())
      .then(data=>{
          setBots(data)
      })

  },[])
  return(
    <div>   
    <YourBotArmy army={army} removeArmyHandler={removeArmyHandler}/>
    <BotCollection  bots={bots} setArmyHandler={setArmyHandler}/>
    </div>
  );
}

export default RenderBots