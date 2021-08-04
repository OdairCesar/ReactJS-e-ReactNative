import React from 'react'

import './App.css'

import Primeiro from './components/basico/Primeiro'
import ComParametro from './components/basico/ComParametros'
import Fragmento from './components/basico/Fragmento'
import Sortear from './components/desafios/Sorteio'
import Card from './components/layout/Card'
import Familia from './components/basico/Familia'
import FamiliaMembro from './components/basico/FamiliaMembro'

export function App (props) {
    return(
        <div className='App'>
            <h1>Fundamentos React</h1>
            <div className='Cards'>
                <Card titulo='Componente com Filhos'>
                    <Familia sobrenome='Ferreira' >
                        <FamiliaMembro
                            nome='Pedro'>
                        </FamiliaMembro>
                        <FamiliaMembro
                            nome='Maria'>
                        </FamiliaMembro>
                        <FamiliaMembro
                            nome='João'>
                        </FamiliaMembro>
                    </Familia>
                </Card>
                <Card titulo='#04 - Desafio Aleatorio' color='red'>
                    <Sortear min={0} max={10}/>
                </Card>

                <Card titulo='#03 - Fragmento' color='blue'>
                    <Fragmento />
                </Card>

                <Card titulo='#02 - Com Parametros' color='orange'>
                    <ComParametro 
                        titulo='Componente com Parametro' 
                        subtitulo='Aqui passamos a informaçõa pelos parametros da tag' 
                        numero={59} />
                </Card>

                <Card titulo='#01 - Componente' color='violet'>
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}