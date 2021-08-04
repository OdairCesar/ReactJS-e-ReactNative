/**
 * DESAFIO:
 * 
 * Criar um componente para sortear um numero.
 * Onde o valor minino e maxino do sorteo serão passados pelos parametros do componente
 * 
 */
import React from 'react'

export default function Sortear(props){
    var min = props.min
    var max = props.max

    return(
        <div className='sorteio'>
            <h2>Sortear numero</h2>
            <p><span>Minino:</span> { min } </p>
            <p><span>Maximo:</span> { max } </p>
            <p>{Math.floor(Math.random() * (max - min)) + min}</p>
        </div>  
    )
}