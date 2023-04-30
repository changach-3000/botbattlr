import React,{useState,useEffect} from 'react'
import { useParams,useNavigate} from "react-router-dom";




function SingleBot({handleDelete,setArmyHandler}) {
    const [singlebot,setSingleBot] =useState(" ")

    const nav = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
      fetch(`http://localhost:3000/bots/${id}`)
      .then(res=>res.json())
      .then(singlebot=>{
        setSingleBot(singlebot)
       
      })
    }, [])
    const goBack = () => {
      nav(-1);}
  return (
   
    <div>
        {
          <div key={singlebot.id} className="col-3 mb-5 mr-3 px-5 mt-5 ">
            <div className='border bg-light overflow-hidden'  >
            <img src="https://img.icons8.com/tiny-color/16/null/close-window.png" onClick={()=> handleDelete(singlebot.id)}/>
            <img src={singlebot.avatar_url} className='img-fluid ' alt='image loading...'/>
            <h5 style={{textAlign:'center',fontWeight:'bolder'}}>{singlebot.name}</h5>
            <p>CatchPhrase :{singlebot.catchphrase}</p>
            <p>Class: {singlebot.bot_class}</p>
            {/* style the bot details */}
            <hr />
            <div id="bot-details">
            <p><i class="heartbeat icon"></i>{singlebot.health}</p>
            <p><i class="icon lightning"></i>{singlebot.damage}</p>
            <p><i class="icon shield"></i>{singlebot.armor}</p>
          </div>
          <button onClick={() => setArmyHandler(singlebot)}>Add to Army</button>
          <button onClick={goBack}>Go back</button>
          </div> 
          </div> 
         
          }
   </div>
  )
}

export default SingleBot