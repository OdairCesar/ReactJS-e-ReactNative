import React from "react";
import { Text } from 'react-native'
import Estilo from "./Estilo";

interface typeProps {
  de: number,
  ate: number
}

const Aleatorio: React.FC<typeProps> = ({de, ate}) => {
  const resultado: number = Math.floor(Math.random() * (ate - de + 1) + de)

  return(
    <Text style={Estilo.textG}>{resultado}</Text>
  )
}

export default Aleatorio