import React, { forwardRef, useImperativeHandle, useState } from 'react'

// useImperativeHandle customizes the instance value that is exposed to parent components when using
const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);
    useImperativeHandle(ref, () => ({
        alertToggle() {
            setToggle(!toggle)
        }
    }))
    return (
        <>
            <button>Button from Child</button>
            {toggle && <span>toggle</span>}
        </>
    )
})

export default Button