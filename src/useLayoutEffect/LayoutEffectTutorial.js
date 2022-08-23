import React, { useEffect, useLayoutEffect, useRef } from 'react'

function LayoutEffectTutorial() {

    // useLayoutEffect(() => {
    //     console.log('Use LayoutEffect');
    // }, [])
    // useEffect(() => { console.log('useEffect'); }, [])

    const divRef = useRef(null)
    // the get origin value it doesn't update value it doesn't get 'Hellooo' use effect it just get 'pedro'
    useLayoutEffect(() => {
        console.log(divRef.current.value);
    }, [])
    useEffect(() => {
        divRef.current.value = 'Helloooo'
    })
    return (
        <div>
            <input type="text" ref={divRef} value='pedro' style={{ width: 400, height: 200 }} />
        </div>
    )
}

export default LayoutEffectTutorial