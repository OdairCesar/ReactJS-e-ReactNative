import React from 'react'
import { SafeAreaView, Text } from 'react-native'

export default function Primeiro () {
  const tsx = <Text>Primeiro Componente</Text>
  return (
    <SafeAreaView>
      <Text>Olá mundo</Text>
      {tsx}
    </SafeAreaView>
  )
}

export function PrimeiroDois () {
  return <Text>Primeiro Componente 2</Text>
}

/*export default = () => {
  return <Text>Primeiro Componente 2</Text>
}*/

/*export default = () => return <Text>Primeiro Componente 2</Text>*/
