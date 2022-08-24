import React, { useRef } from 'react'
import Button from './Button'

function ImperativeHandleTutorial() {
  const buttonRef = useRef(null)
  return (
    <div>
      <button onClick={() => { buttonRef.current.alertToggle() }}>Button From Parent</button>
      <Button ref={buttonRef} />
    </div>
  )
}

export default ImperativeHandleTutorial