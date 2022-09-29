import React from 'react'
import { Text } from 'react-native'
import Estilo from '../Estilo'

interface typeProps {
  nome: string,
  sobrenome: string
}

const Membro: React.FC<typeProps> = ({ nome, sobrenome }) => {
  return (
    <Text style={Estilo.textG}>{`${nome} ${sobrenome}`}</Text> 
  )
}

export default Membro