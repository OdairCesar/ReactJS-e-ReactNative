import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'

interface typeProps {
  num: number
}
const Parimpar: React.FC<typeProps> = ({ num }) => {

  function parOrImpar(): string {
    if (num % 2 === 0) {
      return 'Par'
    } else {
      return 'Impar'
    }
  }

  return (
    <>
      <Text>O resultado é:</Text>
      <Text style={Estilo.textG}>{parOrImpar()}</Text>
      {num % 2 === 0 
        ? <Text style={Estilo.textG}>Par</Text> 
        : <Text style={Estilo.textG}>Impar</Text>
      }
    </>
  )
}

export default Parimpar