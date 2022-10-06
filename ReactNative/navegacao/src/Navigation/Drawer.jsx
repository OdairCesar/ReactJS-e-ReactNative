import React from "react"
// import { createDrawerNavigator } from "@react-navigation/drawer"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"
import TelaC from "../views/TelaC"

const DrawerNav = createNativeStackNavigator()

const Drawer = () => {
  return (
    <DrawerNav.Navigator initialRouteName='TelaB'>
      <DrawerNav.Screen name='TelaA' component={TelaA}/>

      <DrawerNav.Screen name='TelaB' component={TelaB} />
      
      <DrawerNav.Screen name='TelaC' component={TelaC} />
    </DrawerNav.Navigator>
  )
}

export default Drawer