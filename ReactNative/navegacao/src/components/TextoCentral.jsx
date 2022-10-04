import React from 'react'
import { View, Text } from 'react-native'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 50,
  }
}

const TextoCentral = (props) => {
  return (
    <View style={[styles.container, {backgroundColor: props.corfundo || '#000'}]}>
      <Text style={[styles.text, {color: props.cortexto || '#fff'}]}>{props.children}</Text>
    </View>
  )
}

export default TextoCentral