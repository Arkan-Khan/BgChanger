import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div
      style={{
        backgroundColor: color,
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
      }}

    >
      <div className='btn'>
        <button onClick={() => setColor('Red')}>Red</button>
        <button onClick={() => setColor('Green')}>Green</button>
        <button onClick={() => setColor('Blue')}>Blue</button>
        <button onClick={() => setColor('Yellow')}>Yellow</button>
        <button onClick={() => setColor('White')}>White</button>
        <button onClick={() => setColor('Lavender')}>Lavender</button>
      </div>
    </div>
  )
}

export default App
