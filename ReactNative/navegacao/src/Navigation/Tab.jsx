import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons'
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"
import TelaC from "../views/TelaC"

const NativeTab = createBottomTabNavigator()

const Tab = () => {
  return (
    <NativeTab.Navigator
     screenOptions={({ route }) => ({
        labelStyle: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          // iconName = focused ? 'desktop-outline' : 'desktop';

          switch (route.name) {
            case 'TelaA':
              iconName = !focused ?  'desktop-outline' : 'desktop'
              break;
            case 'TelaB':
              iconName = !focused ? 'browsers-outline' :'browsers'
              break;
            case 'TelaC':
              iconName = !focused ? 'laptop-outline': 'laptop'
              break;
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#555',
        tabBarInactiveTintColor: '#aaa',
      })
      } initialRouteName='TelaB'>
      <NativeTab.Screen name='TelaA' component={TelaA} options={{title: 'Desktop'}} />

      <NativeTab.Screen name='TelaB' component={TelaB} options={{title: 'Browsers'}} />
      
      <NativeTab.Screen name='TelaC' component={TelaC} options={{title: 'Laptop'}} />
    </NativeTab.Navigator>
  )
}

export default Tab