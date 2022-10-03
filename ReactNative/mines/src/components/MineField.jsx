import React from "react"
import { StyleSheet, View } from 'react-native'
import Field from "./Field"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee"
  }
}) 

const MineField = ({ board, onOpenField, onSelectField}) => {
  const rows = board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} onOpen={() => onOpenField(r, c)} onSelect={() => onSelectField(r, c)}/>

    })

    return <View style={{flexDirection: 'row'}} key={r}>{columns}</View>
  })

  return <View style={styles.container}>{rows}</View>
}

export default MineField