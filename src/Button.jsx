import './Button.css'

function Button({ onClick, variant, children, className = '' }) {
  return (
    <button 
      onClick={onClick} 
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button