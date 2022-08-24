import React, { useState } from 'react'

function Button(props) {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <button>Button from Child</button>

        </>
    )
}

export default Button