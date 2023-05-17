import React, { useState } from 'react'

export const UpdateValue = () => {
    const [num, setNum] = useState(0);
    const incNum = () => {
        setNum(num + 1)
    }
    const decNum = () => {
        if (num > 0) {
            setNum(num - 1)
        } else {
            setNum(0)
        }

    }

    return (
        <div>List
            <div>
                <h1>{num}</h1>

            </div>
            <div>
                <button onClick={incNum}>+</button>
                <button onClick={decNum}>-</button>
            </div>
        </div>
    )
}
export default UpdateValue;