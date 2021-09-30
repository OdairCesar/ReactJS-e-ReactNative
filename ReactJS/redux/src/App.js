import React from 'react'

import Intervalo from './components/Intervalo'
import Soma from './components/Soma'
import Media from './components/Media'
import Sorteio from './components/Sorteio'

import './App.css'

export default function App(props) {

  return (
    <div className="App">
      <h1>Exervicio React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo></Intervalo>
      </div>
      <div className='linha'>
        <Soma></Soma>
        <Media></Media>
        <Sorteio></Sorteio>
      </div>
    </div>
  )
}
