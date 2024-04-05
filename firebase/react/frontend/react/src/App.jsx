import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>How you doing </h1>
        <a href="/GetStarted">take me hoe</a>
        { import.meta.env.VITE_SOME_KEY }
    </>
  )
}

export default App
