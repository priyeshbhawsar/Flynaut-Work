import React from 'react'
import Child from './Child'
const Parent = () => {
    const data= "this is parent component data"
  return (
    <div>
        <h1>Parent component</h1>
        <Child data={data}/>
    </div>
  )
}

export default Parent