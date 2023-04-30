import React ,{useState} from 'react'

function SortBar({bots,setBots}) {
  const [sorted, setSorted] = useState([]);
  
const handleSort = () => {
sorted = bots.sort((a, b) => (
  a.name.localeCompare(b.name))
)
setSorted(sorted);
setBots(setSorted)
}
  return (
    <div>
    </div>
  );
  }
export default SortBar
