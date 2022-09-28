import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'

export default function Comp () {
  return <Text style={Estilo.textG}>Comp #Oficial</Text>
}

export function Comp1() {
  return <Text style={Estilo.textG}>Comp #01</Text>
}

export function Comp2() {
  return <Text style={Estilo.textG}>Comp #02</Text>
}

/*
export { Comp1, Comp2 }
export default Comp
*/