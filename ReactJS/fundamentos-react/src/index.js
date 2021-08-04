import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import { App } from './App'


const tag = <strong>Ola Mundo!!</strong>

ReactDOM.render(
  <App enviarStrong={tag}/>, 
  document.getElementById('root')
);