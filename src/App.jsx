import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'

function App() {
  const info = [
    {
      "term": "hola",
      "definition": "hello"
    },
    {
      "term": "adiós",
      "definition": "goodbye"
    },
    {
      "term": "por favor",
      "definition": "please"
    },
    {
      "term": "gracias",
      "definition": "thank you"
    },
    {
      "term": "de nada",
      "definition": "you're welcome"
    },
    {
      "term": "sí",
      "definition": "yes"
    },
    {
      "term": "no",
      "definition": "no"
    },
    {
      "term": "buenos días",
      "definition": "good morning"
    },
    {
      "term": "buenas tardes",
      "definition": "good afternoon"
    },
    {
      "term": "buenas noches",
      "definition": "good evening/night"
    }
  ]

  const [forward,setForward]=useState(0)
  const [toggle,setToggle]=useState(false)
  const def = false

  return (
    <div className="App">
        <Flashcard card={info[forward]}  toggle={toggle} onClick={()=>setToggle(!toggle)} />

        <button onClick={()=>{if(forward > 0)
        {setForward(forward-1)
          setToggle(false)
        }}}> previous </button>

        <button onClick={()=>{if(forward < info.length-1)
        {setForward(forward+1)
          setToggle(false)
        }}}> next </button>
    </div>
  )
}

export default App
