import { useState } from 'react'
import './App.css'

import Calendar from './Components/Calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Calendar/>
    </div>
  )
}

export default App
