import React,{useState,useEffect} from 'react'

function BotCollection({bots, setArmyHandler,handleDelete}) {
  return (

    <div className=' container my-5'>
    
     {/* render the bots in cards */}
    <div className=" row ">
        {
          bots.map((bot)=>(
          <div key={bot.id} className="col-3 mb-4  mr-3 px-3">
          <div className='border bg-light overflow-hidden'  >
            <img src="https://img.icons8.com/tiny-color/16/null/close-window.png" onClick={()=> handleDelete(bot.id)}/>
            <img src={bot.avatar_url} className='img-fluid ' alt='image loading...' onClick={() => setArmyHandler(bot)}/>
            <h5 style={{textAlign:'center',fontWeight:'bolder'}}>{bot.name}</h5>
            <p>{bot.catchphrase}</p>
            {/* style the bot details */}
            <hr />
            <div id="bot-details">
            <p>H:{bot.health}</p>
            <p>D:{bot.damage}</p>
            <p>A:{bot.armor}</p>
          </div>
          </div> 
          </div>
          ))  
          }
    </div>
    
  </div>
  )
        }
       
export default BotCollection