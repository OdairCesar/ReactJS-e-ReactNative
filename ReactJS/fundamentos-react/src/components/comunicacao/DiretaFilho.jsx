import React from 'react'

export default function DiretaFilho(props){
    return(
        <div>
            {props.texto} {props.numero} {props.bool ? 'Verdadeiro' : 'Falso'}
        </div>
    )
}