import React from 'react'
import { View, StyleSheet, ViewStyle, Text } from 'react-native'
import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

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
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize
  },

  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },

  flagged: {}
})

export interface FieldPropsType {
  mined?: boolean
  opened?: boolean
  nearMines?: number
  exploded?: boolean
  flagged?: boolean
}

const Field: React.FC<FieldPropsType> = ({ 
  mined = false , 
  opened = false, 
  nearMines = 0, 
  exploded = false, 
  flagged = false 
}) => {

  const styleField: Array<ViewStyle> = [ styles.field ]

  if (opened) styleField.push(styles.opened)
  if (exploded) styleField.push(styles.exploded)
  if (flagged) styleField.push(styles.flagged)
  if (!flagged && !exploded) styleField.push(styles.regular)
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
        : null}
      {mined && opened ? <Mine /> : null}
      {flagged && !opened ? <Flag /> : null}
    </View>
  )
}
export default Field
