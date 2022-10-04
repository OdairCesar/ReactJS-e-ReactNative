import React from "react"
import { View, Button} from 'react-native'

const PassoStack = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-between'}}>
        {props.voltar 
          ? <Button title="Voltar" onPress={() => props.navigation.goBack()} />
          : false}
        {props.avancar 
          ? <Button title="Avançar" onPress={() => props.navigation.navigate(props.avancar, { numero: parseInt(Math.random() * 100)})} />
          : false}
      </View>

      <View style={{ flex: 1 }}>
        {props.children}
      </View>
    </View>
  )
}

export default PassoStack