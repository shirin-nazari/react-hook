import React, { useEffect } from 'react'

function Child({ returnComment }) {
    useEffect(() => {
        console.log('FUNCTION IS CALLED');
    }, [returnComment])
    return (
        <div>
            {returnComment()}
        </div>
    )
}

export default Child