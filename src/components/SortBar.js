import React,{useState,useEffect} from 'react'

function SortBar({bots,setBots}) {

  const [ sorted, setsorted]=useState({sorted:"health",reversed:false});
  
  function sortByCategory() {
    const categoryCopy = [...bots];
    categoryCopy.sort((bot1, bot2) => {
      const categorynameA = `${bot1.category}`;
      const categorynameB = `${bot2.category}`;
      if (sorted.reversed) {
        return categorynameB.localeCompare(categorynameA);
      }
      return categorynameA.localeCompare(categorynameB);
    });
    setBots(categoryCopy);
    setsorted({ sorted: sorted.sorted, reversed: !sorted.reversed });

}

  return (
    <div>
  
    </div>
  );
  }
export default SortBar