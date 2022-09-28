import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Estilo from '../Estilo'

interface typeProps {
  num: number
}

const ContadorDisplay : React.FC<typeProps> = ({num}) => {

  return(
    <View>
      <Text style={Estilo.textG}>{num}</Text>
    </View>
  )
}

export default ContadorDisplay

const style = StyleSheet.create({
  Display: {
    backgroundColor: '#000',
    padding: 20
  },

  DisplayText: {
    color: '#fff'
  }
})