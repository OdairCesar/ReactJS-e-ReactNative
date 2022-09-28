import React, { useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../Estilo'
import ContadorDisplay from './ContadorDisplay'

const ContadorV2 : React.FC = () => {

  const [ num, setNum ] = useState(0)

  return(
    <>
      <Text style={Estilo.textG}>Contador</Text>
      <ContadorDisplay num={num}></ContadorDisplay>
    </>
  )
}
export default ContadorV2