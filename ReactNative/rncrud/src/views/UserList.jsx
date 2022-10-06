import { Avatar, ListItem, Button, Icon } from '@rneui/base'
import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import UsersContext from '../hooks/UsersContext'

const UserList = (props) => {

  const { state, dispatch } = useContext(UsersContext)

  const keyExtractor = (item, index) => index.toString()

  const editUser = (user) => props.navigation.navigate('UserForm', user)

  const deleteUser = user => {
    Alert.alert('Excluir Usúario', 'Deseja excluir o usúario', [{
      text: 'Sim',
      onPress() {
        dispatch({
          type: 'deleteUser',
          payload: user
        })
      }
    }, {
      text: 'Não'
    }])
  }

  const getUserItem = ({ item }) => (
    <ListItem bottomDivider> 
      <Avatar title={item.name} source={{uri: item.avatarUrl}} />

      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
      </ListItem.Content>

      <View style={{ flexDirection: 'row'}}>
        <Button type='clear'
          onPress={() => editUser(item)} 
          icon={
            <Icon name='edit' size={25} color='orange'/>
          } />

        <Button type='clear' onPress={() => deleteUser(item)} 
          icon={
            <Icon name='delete' size={25} color='red'/>
          } />
      </View>
    </ListItem>
  )

  return (
    <View>
      <FlatList data={state.users} keyExtractor={keyExtractor} renderItem={getUserItem}/>
    </View>
  )
}

export default UserList