import React from 'react'
import Primeiro from './components/basico/Primeiro'
import ComParametro from './components/basico/ComParametros'
import Fragmento from './components/basico/Fragmento'

export function App (props) {
    return(
        <div>
            <h1>Fundamento do React</h1>
            <h2>{ props.enviarStrong }</h2>
            <Primeiro />
            <ComParametro titulo='Componente com Parametro' subtitulo='Aqui passamos a informaçõa pelos parametros da tag' numero={59} />
            <Fragmento />
        </div>
    )
}