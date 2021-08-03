import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametros'


const tag = <strong>Outra forma de mostra coisas</strong>

ReactDOM.render(
  <div>
    <p>Ola Mundo !!</p> 
    <p>{ tag }</p> 
    <Primeiro />
    <ComParametro titulo="Segundo componente" subtitulo="Passando info via paramentros" numero={9.2} />
  </div>,
  document.getElementById('root')
);