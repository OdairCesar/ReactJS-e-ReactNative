import React from 'react'
import If, { Else } from './If'

export default function UsuarioInfo(props){
    const usuario = props.usuario || {}
    return(
        <div>
            {/*<If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{ usuario.nome }</strong>!
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Colega</strong>!
            </If>*/}
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{ usuario.nome }</strong>!
                <Else test={!usuario || !usuario.nome}>
                    Seja bem vindo <strong>Colega</strong>!
                </Else>
            </If>
        </div>
    )
}