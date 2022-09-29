import React from "react";
import { Text, Platform } from 'react-native'
import Estilo from "./Estilo";

const Diferenciar = () => {
  switch (Platform.OS) {
    case 'android':
      return <Text style={Estilo.textG}>Android</Text>
      break
    case 'ios':
      return <Text style={Estilo.textG}>iOS</Text>
      break
    default:
      return <Text style={Estilo.textG}>Não é android e nem iOS</Text>
      break
  }
}

export default Diferenciar