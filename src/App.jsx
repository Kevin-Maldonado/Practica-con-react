import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><header className="py-5 header">
      <a href="index.html">
      <img className='img-fluid' src="img/logo.svg" alt="Logo" srcset="" />
      </a>
      <h1>Tienda de Guitarras - EC</h1>
    </header>
    </>
  )
}

export default App
