import React, { useState } from "react"
import { Text, Button } from 'react-native'

interface typeProps {
  inicial?: number
  passo?: number
}

const Contador: React.FC<typeProps> = ({ inicial = 0, passo = 1 }) => {

  let [ numero, setNumero ] = useState(inicial)

  function incremento(): void {
    setNumero(numero + passo)
  }

  function decremento(): void {
    if (numero - passo >= 1)
      setNumero(numero - passo)
    else 
      setNumero(0)
  }

  return (
    <>
      <Text>{numero}</Text>
      <Button title="Aumentar" onPress={incremento}></Button>
      <Button title="Diminuir" onPress={decremento}></Button>
    </>
  )
}

export default Contador