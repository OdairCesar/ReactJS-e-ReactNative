import React from "react"
import { Text } from 'react-native'
import Estilo from "./Estilo"

interface typeProps {
  principal: string,
  segundario: string
}

const Titulo: React.FC<typeProps> = ({ principal, segundario }) => {
  return(
    <>
      <Text style={Estilo.textG}>{principal}</Text>
      <Text>{segundario}</Text>
    </>
  )
}

export default Titulo