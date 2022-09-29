import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

interface typeProps {
  inc: Function,
  dec: Function
}

const ContadorBotoes: React.FC<typeProps> = ({ inc, dec }) => {
  return (
    <View style={style.Botoes}>
      <Button title="+" onPress={() => inc()} />
      <Button title="-" onPress={() => dec()} />
    </View>
  )
}

export default ContadorBotoes

const style = StyleSheet.create({
  Botoes: {
    flexDirection: 'row',
  }
})