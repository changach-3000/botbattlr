import React,{useState,useEffect} from 'react'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import SortBar from './SortBar'
import SingleBot from './SingleBot'
import {Routes,Route} from 'react-router-dom'




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

  // Delete Bot
  function handleDelete(id){
    fetch(`http://localhost:3000/bots/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    setBots(bots.filter((bot) => bot.id !== id));
  }
 
  return(
    <div className='render-bots'>  
  <Routes>
    <Route  path="bot/:id"
          element={<SingleBot handleDelete={handleDelete} setArmyHandler={setArmyHandler}/>}/>
  </Routes>
  <YourBotArmy army={army} removeArmyHandler={removeArmyHandler}/>

   <BotCollection  bots={bots} setArmyHandler={setArmyHandler} handleDelete={handleDelete}/>
  
   
   
    </div>
  );
}

export default RenderBots