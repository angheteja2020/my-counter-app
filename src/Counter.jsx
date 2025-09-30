import './Counter.css'

function Counter({ count, onIncrement, onDecrement, onReset }) {
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
      <div className="button-container">
        <button onClick={onDecrement} className="btn btn-decrement">
          -
        </button>
        <button onClick={onReset} className="btn btn-reset">
          Reset
        </button>
        <button onClick={onIncrement} className="btn btn-increment">
          +
        </button>
      </div>
    </div>
  )
}

export default Counter