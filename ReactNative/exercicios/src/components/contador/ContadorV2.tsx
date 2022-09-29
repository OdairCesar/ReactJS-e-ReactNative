import React, { useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../Estilo'
import ContadorBotoes from './ContadorBotoes'
import ContadorDisplay from './ContadorDisplay'

const ContadorV2 : React.FC = () => {

  const [ num, setNum ] = useState(0)

  const incremento = () => setNum(num + 1)

  const decremento = () => setNum(num - 1)

  return(
    <>
      <Text style={Estilo.textG}>Contador</Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes dec={decremento} inc={incremento} />
    </>
  )
}
export default ContadorV2