import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Estilo from '../Estilo'

interface typeProps {
  num: number
}

const MegaNumero: React.FC<typeProps> = ({ num }) => {
  return (
    <View style={style.Container}>
      <Text style={[Estilo.textG, style.Num]}>
        {num}
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  Container: {
    height: 50,
    width: 50,
    backgroundColor: '#000',
    margin: 5,
    borderRadius: 25,
  },
  Num: {
    color: '#FFF'
  }
})

export default MegaNumero