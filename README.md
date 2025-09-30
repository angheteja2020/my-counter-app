# React Counter App

A modern, interactive counter application built with React and Vite featuring customizable increment values, persistent storage, and dynamic messaging.

## 🚀 Features

- **Increment/Decrement Counter** - Add or subtract from the current count
- **Custom Increment Values** - Set how much to increment/decrement by using the input field
- **Persistent Storage** - Counter value is saved to localStorage and persists between sessions
- **Dynamic Messages** - Displays contextual messages when count goes negative or exceeds 10
- **Reset Functionality** - Quickly reset the counter back to 0
- **Modern UI** - Beautiful gradient design with smooth animations and hover effects
- **Component-Based Architecture** - Reusable Button component for consistency

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/angheteja2020/my-counter-app.git
cd my-counter-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── App.jsx          # Main component managing counter state
├── App.css          # App component styles
├── Counter.jsx      # Counter display and controls component
├── Counter.css      # Counter component styles
├── Button.jsx       # Reusable button component
├── Button.css       # Button component styles
├── main.jsx         # Application entry point
└── index.css        # Global styles
```

## 🧩 Components

### App.jsx
- Manages the counter state using `useState`
- Handles localStorage persistence with `useEffect`
- Controls increment/decrement/reset logic
- Passes props to child components

### Counter.jsx
- Displays the current count
- Shows conditional messages based on count value
- Contains the increment value input field
- Renders Button components for user actions

### Button.jsx
- Reusable button component
- Accepts props for variant styling (increment/decrement/reset)
- Customizable through props (onClick, children, className)

## 💾 localStorage

The app automatically saves the counter value to localStorage:
- **Key**: `counterValue`
- **Persistence**: Survives page refreshes and browser restarts
- **Auto-save**: Updates on every count change

## 🎨 Styling

- **Gradient backgrounds** for visual appeal
- **Hover effects** on buttons for better UX
- **Smooth animations** for message transitions
- **Responsive design** centered layout
- **Color-coded messages**:
  - Red for negative values
  - Blue for values over 10

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations
- **localStorage API** - Browser storage for persistence

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🔧 Customization

### Adding New Button Variants
1. Add new variant styles in `Button.css`
2. Use the Button component with your new variant:
```jsx
<Button variant="your-variant" onClick={handleClick}>
  Button Text
</Button>
```

### Modifying Count Thresholds
Edit the `getMessage()` function in `Counter.jsx` to change when messages appear:
```javascript
const getMessage = () => {
  if (count < 0) {
    // Negative message
  } else if (count > 10) {  // Change this value
    // High count message
  }
  return null
}
```

### Changing localStorage Key
Update the key in `App.jsx`:
```javascript
localStorage.getItem('your-custom-key')
localStorage.setItem('your-custom-key', count.toString())
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check issues page.

## 👨‍💻 Author

Anghello Tejada Arata

---

Built with ❤️ using React and Vite