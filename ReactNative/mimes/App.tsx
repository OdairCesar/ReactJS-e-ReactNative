import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import params from './src/params'
import Field from './src/components/Field'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Iniciando o Mimes</Text>
      <Text>Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
      <Field />
      <Field opened />
      <Field opened nearMines={1}/>
      <Field opened nearMines={2}/>
      <Field opened nearMines={3}/>
      <Field opened nearMines={4}/>
      <Field opened nearMines={5}/>
      <Field opened nearMines={6}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
})

export default App