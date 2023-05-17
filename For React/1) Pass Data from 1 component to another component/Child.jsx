import React from 'react'

const Child = (props) => {
    
  return (
    <div>
       <h1>Chile component</h1>
       <h3>{props.data}</h3>
    </div>
  )
}

export default Child