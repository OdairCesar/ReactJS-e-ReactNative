import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'

export default function Primeiro () {
  /*const tsx = <Text>Primeiro Componente</Text>*/
  //console.warn('Opa!')
  return (
    <Text style={Estilo.textG}>Olá mundo</Text>
  )
}

/*
export function PrimeiroDois () {
  return <Text>Primeiro Componente 2</Text>
}

export default = () => {
  return <Text>Primeiro Componente 2</Text>
}

export default = () => return <Text>Primeiro Componente 2</Text>
*/