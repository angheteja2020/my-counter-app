import { useState } from 'react'
import Counter from './Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [incrementBy, setIncrementBy] = useState(1)

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