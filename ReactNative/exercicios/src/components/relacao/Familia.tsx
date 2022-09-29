import React from 'react'
import { Text } from 'react-native'

interface typeProps {
  nome: string,
  children?: React.ReactNode
}

const Familia = (props: typeProps) => {
  return (
    <>
      <Text>Membros da Familia: {props.nome}</Text>
      {props.children}
    </>
  )
}

export default Familia