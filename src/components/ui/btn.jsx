import React, { memo } from 'react'

const Btn = memo(({text}) => {
    console.log("Btn is rendering");
    
  return (
    <div>
        <h1>Game</h1>
        <p>{text.name}</p>
    </div>
  )
})

export default Btn