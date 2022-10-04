import React from 'react'
import { SafeAreaView } from 'react-native'
import TelaA from './views/TelaA'
import TelaB from './views/TelaB'
import TelaC from './views/TelaC'

const styles = {
  container: {
    flex: 1,
  }
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TelaA />
      <TelaB />
      <TelaC />
    </SafeAreaView>
  )
}

export default App