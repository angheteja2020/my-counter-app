import { useState } from "react"
import Counter from './Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="App">
      <h1>React Counter App</h1>
      <Counter
       count={count}
       onIncrement={increment}
       onDecrement={decrement}
       onReset={reset}
      />
      </div>
  )
}

export default App