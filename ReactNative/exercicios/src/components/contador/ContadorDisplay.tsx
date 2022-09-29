import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Estilo from '../Estilo'

interface typeProps {
  num: number
}

const ContadorDisplay : React.FC<typeProps> = ({num}) => {

  return(
    <View style={style.Display}>
      <Text style={[Estilo.textG, style.DisplayText]}>{num}</Text>
    </View>
  )
}

export default ContadorDisplay

const style = StyleSheet.create({
  Display: {
    backgroundColor: '#000',
    padding: 20,
    width: 300
  },

  DisplayText: {
    color: '#fff'
  }
})