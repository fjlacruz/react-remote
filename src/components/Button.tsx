import './Button.css'

import { useState } from 'react'

export const Button = () => {
  const [state, setState] = useState(0)
  return (
    <div>
      <h1>MicroFront</h1>
    </div>
  )
}

export default Button
