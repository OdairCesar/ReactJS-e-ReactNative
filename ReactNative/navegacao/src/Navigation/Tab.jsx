import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"
import TelaC from "../views/TelaC"

const NativeTab = createBottomTabNavigator()

const Tab = () => {
  return (
    <NativeTab.Navigator tabBarOptions={{
        activeTintColor: '#555',
        inactiveTintColor: '#aaa',
        labelStyle: { fontSize: 30}
      }} initialRouteName='TelaB'>
      <NativeTab.Screen name='TelaA' component={TelaA}/>

      <NativeTab.Screen name='TelaB' component={TelaB} />
      
      <NativeTab.Screen name='TelaC' component={TelaC} />
    </NativeTab.Navigator>
  )
}

export default Tab