import React from 'react'
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

function BotHome({army,removeArmyHandler,bots,setArmyHandler,handleDelete}) {
  return (
    <div>
    <YourBotArmy army={army} removeArmyHandler={removeArmyHandler}/>
    <BotCollection bots={bots} setArmyHandler={setArmyHandler} handleDelete={handleDelete}/>
    </div>
  )
}

export default BotHome