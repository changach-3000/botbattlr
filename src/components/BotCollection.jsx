import React,{useState,useEffect} from 'react'


function BotCollection() {

//create a state for the bots
const [bots, setBots] =useState([])
    // Get Bots and render them into bot collection
    useEffect(()=>{
        fetch("http://localhost:3000/bots")
        .then(res => res.json())
        .then(data=>{
            setBots(data)
        })

    },[])
  return (
  
    <div className=' container my-5'>
     {/* render the bots in cards */}
    <div className=" row ">
        {
          bots.map((bot)=>(
          <div key={bot.id} className="col-4 mb-3  mr-3 px-3">
          <div  className='border bg-light overflow-hidden'>
            <img src={bot.avatar_url} className='img-fluid ' alt='image loading...' />
            <h5 style={{textAlign:'center'}}>{bot.name}</h5>
            <p>{bot.catchphrase}</p>
            {/* style the bot details */}
            <hr />
            <div id="bot-details">
            <p>Health:{bot.health}</p>
            <p>Damage:{bot.damage}</p>
            <p>Armor:{bot.armor}</p>
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