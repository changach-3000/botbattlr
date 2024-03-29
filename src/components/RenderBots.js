import React,{useState,useEffect} from 'react'
import SortBar from './SortBar'
import SingleBot from './SingleBot'
import BotHome from './BotHome'
import {Routes,Route} from 'react-router-dom'



function RenderBots() {
//create a state for the bots
const [bots, setBots] =useState([]);
const [army, setArmy] = useState([]);


const setArmyHandler = (bot) => {
  const newArmy = army.filter((b) => b.id !== bot.id);
  if(!army.some(army => army.bot_class === bot.bot_class))
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
    <SortBar bots={bots} setBots={setBots}/>
  <Routes>
    
    <Route  path="bot/:id" element={<SingleBot handleDelete={handleDelete} setArmyHandler={setArmyHandler}/>}/>
     <Route path='/' element={<BotHome army={army} removeArmyHandler={removeArmyHandler}bots={bots} setBots={setBots} setArmyHandler={setArmyHandler} handleDelete={handleDelete}/>}/>
  </Routes>
  
    </div>
  );
}

export default RenderBots