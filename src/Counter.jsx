import Button from './Button'
import './Counter.css'

function Counter({ count, incrementBy, onIncrement, onDecrement, onReset, onIncrementChange }) {
  // Determine which message to show based on count
  const getMessage = () => {
    if (count < 0) {
      return { text: "⚠️ Count is negative!", className: "message-negative" }
    } else if (count > 10) {
      return { text: "🎉 Wow! You're over 10!", className: "message-high" }
    }
    return null
  }

  const message = getMessage()

  return (
    <div className="counter">
      <h2 className="count-display">Count: {count}</h2>
      {message && (
        <div className={`message ${message.className}`}>
          {message.text}
        </div>
      )}
      <div className="increment-control">
        <label htmlFor="increment-input">Increment/Decrement by: </label>
        <input 
          id="increment-input"
          type="number" 
          value={incrementBy} 
          onChange={onIncrementChange}
          className="increment-input"
          min="1"
        />
      </div>
      <div className="button-container">
        <Button onClick={onDecrement} variant="decrement">
          - {incrementBy}
        </Button>
        <Button onClick={onReset} variant="reset">
          Reset
        </Button>
        <Button onClick={onIncrement} variant="increment">
          + {incrementBy}
        </Button>
      </div>
    </div>
  )
}

export default Counter