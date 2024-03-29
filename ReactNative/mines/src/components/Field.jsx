import React from 'react';
import {View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native';
import params from '../params';
import Mine from './Mine';
import Flag from './Flag';

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
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
    fontSize: params.fontSize,
  },

  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
});

const Field = (props) => {
  const { mined, opened, nearMines, exploded, flagged, onOpen, onSelect } = props
  const styleField = [styles.field];

  if (opened) styleField.push(styles.opened);
  if (exploded) styleField.push(styles.exploded);
  if (flagged) styleField.push(styles.flagged);
  if (!opened && !exploded) styleField.push(styles.regular);

  let color = null;
  if (nearMines > 0) {
    if (nearMines == 1) color = '#2A28D7';
    if (nearMines == 2) color = '#2B520F';
    if (nearMines > 2 && nearMines < 6) color = '#F9060A';
    if (nearMines >= 6) color = '#F221A9';
  }

  return (
    <TouchableNativeFeedback onPress={props.onOpen} onLongPress={props.onSelect}>
      <View style={styleField}>
        {!mined && opened && nearMines > 0 ? (
          <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
        ) : null}
        {mined && opened ? <Mine /> : false}
        {flagged && !opened ? <Flag /> : false}
      </View>
    </TouchableNativeFeedback>
  );
};
export default Field;
