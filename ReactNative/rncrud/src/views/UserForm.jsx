import React from 'react'
import { Text } from 'react-native'

const UserForm = (props) => {
  console.log(props.route.params)
  return (
    <Text>User Form</Text>
  )
}

export default UserForm