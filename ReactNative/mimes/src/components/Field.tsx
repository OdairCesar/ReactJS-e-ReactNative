import React from 'react'
import { View, StyleSheet, ViewStyle, Text } from 'react-native'
import params from '../params'

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#ccc',
    borderTopColor: '#ccc',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderLeftColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize
  },
})

export interface FieldPropsType {
  mined?: boolean
  opened?: boolean
  nearMines?: number
  exploded?: boolean
}

const Field: React.FC<FieldPropsType> = ({ mined = false , opened = false, nearMines = 0, exploded = true }) => {

  const styleField: Array<ViewStyle> = [ styles.field ]

  if (opened) styleField.push(styles.opened)
  if (styleField.length === 1) styleField.push(styles.regular)

  let colorLabel: string = 'transparent'
  if (nearMines > 0) {
    if (nearMines == 1) colorLabel = '#2A28D7'
    if (nearMines == 2) colorLabel = '#2B520F'
    if (nearMines > 2 && nearMines < 6) colorLabel = '#F9060A'
    if (nearMines >= 6) colorLabel = '#F221A9'
  }

  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0
        ? <Text style={[styles.label, {color: colorLabel}]}>{nearMines}</Text>
        : false}
    </View>
  )
}
export default Field
