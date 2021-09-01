import React from 'react'

import './App.css'

import Primeiro from './components/basico/Primeiro'
import ComParametro from './components/basico/ComParametros'
import Fragmento from './components/basico/Fragmento'
import Sortear from './components/desafios/Sorteio'
import Card from './components/layout/Card'
import Familia from './components/basico/Familia'
import FamiliaMembro from './components/basico/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProdutos from './components/desafios/ListaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'

export function App (props) {
    return(
        <div className='App'>
            <h1>Fundamentos React</h1>
            <div className='Cards'>
                
                <Card titulo='#09 - Comunicação' color='#623AA2'>
                </Card>

                <Card titulo='#08 - Renderização Condicional' color='#9F44D3'>
                    <UsuarioInfo usuario={{nome: 'Paulo'}}></UsuarioInfo>
                    <UsuarioInfo usuario={{email: 'paulosilva@contato.com'}}></UsuarioInfo>
                    <ParOuImpar numero={8}></ParOuImpar>
                </Card>

                <Card titulo='#07 - Desafio Repetição' color='#28C76F'>
                    <ListaProdutos></ListaProdutos>
                </Card>

                <Card titulo='#06 - Repetição' color='#F6416C'>
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo='#05 - Componente com Filhos' color='#32CCBC'>
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

                <Card titulo='#04 - Desafio Aleatorio' color='#7367F0'>
                    <Sortear min={0} max={10}/>
                </Card>

                <Card titulo='#03 - Fragmento' color='#EA5455'>
                    <Fragmento />
                </Card>

                <Card titulo='#02 - Com Parametros' color='#0396FF'>
                    <ComParametro 
                        titulo='Componente com Parametro' 
                        subtitulo='Aqui passamos a informaçõa pelos parametros da tag' 
                        numero={59} />
                </Card>

                <Card titulo='#01 - Componente' color='#F8D800'>
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}