import React from "react"
import { Text } from "react-native"
import Estilo from "./Estilo"

interface typeProps {
  max: number,
  min: number,
  children?: JSX.Element
}

export default (props: typeProps) => { 
  //console.warn(param)
  return (
    <Text style={Estilo.textG}>O valor {props.max} é maior que o valor de {props.min}!</Text>
  )
}
 