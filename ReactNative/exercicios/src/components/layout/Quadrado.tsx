import React from 'react'
import { View } from 'react-native'

interface typeProps {
  lado?: number,
  cor?: string
}

export default (props: typeProps) => {
    const lado = props.lado || 50
    return (
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.cor || '#000'
        }} />
    )
}