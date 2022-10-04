import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"
import TelaC from "../views/TelaC"
import PassoStack from '../components/PassoStack'
import TextoCentral from '../components/TextoCentral'

const NativeStack = createNativeStackNavigator()

const Stack = () => {
  return (
    <NativeStack.Navigator initialRouteName="TelaA" screenOptions={{headerShown: true}}>
      <NativeStack.Screen name='TelaA' options={{title: 'Tela A'}}> 
        { props => (
          <PassoStack navigation={props.navigation} avancar="TelaB">
            <TextoCentral corfundo="#dc2626">Tela A</TextoCentral>
          </PassoStack>
        )}
      </NativeStack.Screen>

      <NativeStack.Screen name='TelaB'>
        {props => (
          <PassoStack navigation={props.navigation} voltar avancar="TelaC">
            <TextoCentral corfundo="#2563eb">Tela B</TextoCentral>
          </PassoStack>
        )}
      </NativeStack.Screen>
      
      <NativeStack.Screen name='TelaC' component={TelaC}>
      </NativeStack.Screen>
    </NativeStack.Navigator>
  )
}

export default Stack