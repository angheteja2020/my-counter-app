import { useState, useEffect } from 'react'
import Counter from './Counter'
import './App.css'

function App() {
  // Initialize count from localStorage or default to 0
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('counterValue')
    return savedCount !== null ? parseInt(savedCount) : 0
  })
  
  const [incrementBy, setIncrementBy] = useState(1)

  // Save count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('counterValue', count.toString())
  }, [count])

  const increment = () => setCount(count + incrementBy)
  const decrement = () => setCount(count - incrementBy)
  const reset = () => setCount(0)

  const handleIncrementChange = (e) => {
    const value = parseInt(e.target.value) || 1
    setIncrementBy(value)
  }

  return (
    <div className="App">
      <h1>React Counter App</h1>
      <Counter 
        count={count}
        incrementBy={incrementBy}
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
        onIncrementChange={handleIncrementChange}
      />
    </div>
  )
}

export default App