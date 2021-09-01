import React from 'react'
import DiretaFilho from './DiretaFilho'

export default function DiretaPai(props){
    return(
        <div>
            <DiretaFilho texto='Pedro' numero={12} nerd={false}></DiretaFilho>
            <DiretaFilho texto='João' numero={11} nerd={true}></DiretaFilho>
        </div>
    )
}