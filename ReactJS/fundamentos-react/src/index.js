import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

const tag = <strong>Outra forma de mostra coisas</strong>

ReactDOM.render(
  <div>Ola Mundo, { tag }</div>,
  document.getElementById('root')
);