import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TitleBar from './components/titlebar'
import Intro from './components/intro'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <TitleBar />
    <Intro />
    
    </>
  )
}

export default App
