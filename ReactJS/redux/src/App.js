import React, { useState } from 'react'

import Intervalo from './components/Intervalo'
import Soma from './components/Soma'
import Media from './components/Media'
import Sorteio from './components/Sorteio'

import './App.css'

export default function App(props) {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  return (
    <div className="App">
      <h1>Exervicio React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo min={min} max={max} setMin={setMin} setMax={setMax}></Intervalo>
      </div>
      <div className='linha'>
        <Soma min={min} max={max}></Soma>
        <Media min={min} max={max}></Media>
        <Sorteio min={min} max={max}></Sorteio>
      </div>
    </div>
  )
}
