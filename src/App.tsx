import { useState } from 'react'

import './App.css'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div></div>
      <h1>Remote</h1>
      <div className="card">
        <Button />
      </div>
    </div>
  )
}

export default App
