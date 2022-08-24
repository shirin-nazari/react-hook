import React, { useCallback, useState } from 'react'
import axios from 'axios'
import Child from './Child';


function CallbackTutorial() {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState('you plz sub to the channel');
    // This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders 
    const returnComment = useCallback((name) => {
        return data + name
    }, [data])
    return (
        <div>
            <Child returnComment={returnComment} />

            <button onClick={() => { setToggle(!toggle) }}>Toggle</button>
            {toggle && <h1>Toggle</h1>}
        </div>
    )
}

export default CallbackTutorial