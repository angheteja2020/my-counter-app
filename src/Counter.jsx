import './Counter.css'

function Counter({ count, onIncrement, onDecrement, onReset }) {
  return (
    <div className="counter">
      <h2 className="count-display">Count: {count}</h2>
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