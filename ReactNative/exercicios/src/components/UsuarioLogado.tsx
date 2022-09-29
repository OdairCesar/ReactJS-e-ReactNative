import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'
import If from './If'

interface typeProps {
  usuario: {
    nome: string,
    email: string
  }
}

export default (props: typeProps) => {
  const usuario = props.usuario || {}
  return (
    <>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text style={Estilo.textG}>Usuário Logado:</Text>
        <Text style={Estilo.textG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </>
  )
}