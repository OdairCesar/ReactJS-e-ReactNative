import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import Estilo from './Estilo'

export default () => {
  const [nome, setNome] = useState('Teste')
  return (
    <View style={style.wFull}>
      <Text style={Estilo.textG}>{nome}</Text>
      <TextInput
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={nome => setNome(nome)}
      />
    </View>
  )
}

const style = StyleSheet.create({
  wFull: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})