import React from 'react'
import { Text } from 'react-native'
import Estilo from '../Estilo'

interface typeProps {
  a: number,
  b: number
}

const Filho: React.FC<typeProps> = ({a, b}) => {

  return(
    <>
      <Text style={Estilo.textG}>{a}</Text>
      <Text style={Estilo.textG}>{b}</Text>
    </>
  )
}

export default Filho