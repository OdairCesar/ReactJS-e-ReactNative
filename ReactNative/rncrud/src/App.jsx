import React from 'react'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button, Icon } from '@rneui/base'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const App = () => {

  const StackNav = createNativeStackNavigator()

  const screenOptions = {
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }

  return (
    <NavigationContainer>
      <StackNav.Navigator screenOptions={screenOptions} initialRouteName="UserList">
        <StackNav.Screen name="UserList" component={UserList} 
          options={({ navigation }) => {
            return {
              title: 'Lista de usúarios', 
              headerRight: () => (
                <Button type="clear"
                  onPress={() => navigation.navigate('UserForm')}
                  icon={
                    <Icon name="add" size={25} color="white" />
                  } 
                />
              )
            }
          }}/>
        <StackNav.Screen name="UserForm" component={UserForm} options={{title: 'Formúlario de usúarios'}}/>
      </StackNav.Navigator>
    </NavigationContainer>
  )
}

export default App