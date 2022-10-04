import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"
import TelaC from "../views/TelaC"

const NativeDrawer = createDrawerNavigator()

const Drawer = () => {
  return (
    <NativeDrawer.Navigator initialRouteName='TelaB'>
      <NativeDrawer.Screen name='TelaA' component={TelaA}/>

      <NativeDrawer.Screen name='TelaB' component={TelaB} />
      
      <NativeDrawer.Screen name='TelaC' component={TelaC} />
    </NativeDrawer.Navigator>
  )
}

export default Drawer