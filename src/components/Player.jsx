import { useState } from "react"

export default function Player({initialName,symbol}){
  const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)
    const handleEditClick = ()=>{
        setIsEditing((editing)=> !editing)
    }
  function handleChage(event){
      setPlayerName(event.target.value)
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>
    if(isEditing){
      editablePlayerName = <input type="text" required value={playerName} onChange={handleChage}/>
    }
    return (
        <li>
        <span className="player">
          <span className="player-name">{editablePlayerName}</span>
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button>
      </li>
    )
}