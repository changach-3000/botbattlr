import React,{useState,useEffect} from 'react'
import SingleBot from './SingleBot'
import {Link} from 'react-router-dom'
import SortBar from './SortBar';


function BotCollection({bots,setBots,handleDelete}) {
  const [selectedClass, setSelectedClass] = useState('');

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const filteredBots = selectedClass
    ? bots.filter((bot) => bot.bot_class === selectedClass)
    : bots;
  return (
<div>
<div className='filterBar'>
  <select value={selectedClass} onChange={handleClassChange}>
    <option value=''>Filter By Class</option>
    <option value='Support'>Support</option>
    <option value='Medic'>Medic</option>
    <option value='Assault'>Assault</option>
    <option value='Defender'>Defender</option>
    <option value='Captain'>Captain</option>
    <option value='Witch'>Witch</option>
  </select>

</div>
<div>
  
</div>
    <div className=' container my-5'>
    
     {/* render the bots in cards */}
    <div className=" row ">
        {
          filteredBots.map((bot)=>( 
          <div key={bot.id} className="col-3 mb-4  mr-3 px-3">
          <div className='border bg-light overflow-hidden'  >
          
            <img src="https://img.icons8.com/tiny-color/16/null/close-window.png" onClick={()=> handleDelete(bot.id)}/>
            <Link to={`bot/${bot.id}`}>
            <img src={bot.avatar_url} className='img-fluid ' alt='image loading...' />
            </Link>
            <h5 style={{textAlign:'center',fontWeight:'bolder'}}>{bot.name}</h5>
            <p>{bot.catchphrase}</p>
            {/* style the bot details */}
            <hr />
            <div id="bot-details">
            <p><i class="heartbeat icon"></i> {bot.health}</p>
            <p><i class="icon lightning"></i>{bot.damage}</p>
            <p><i class="icon shield"></i>{bot.armor}</p>
            <p>{bot.bot_class}</p>
          </div>
          </div> 
          </div>
          ))  
          }
    </div>
    
  </div>
  </div>
  )
        }
       
export default BotCollection