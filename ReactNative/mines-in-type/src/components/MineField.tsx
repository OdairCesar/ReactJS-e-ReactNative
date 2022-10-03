import React from "react"
import { StyleSheet, View } from 'react-native'
import { Board } from "../functions"
import Field from "./Field"

interface MineFieldPropsType {
  board: Array<Array<Board>>
  onOpenField(r: number, c:number): void  
  onSelectField(r: number, c:number): void
}

const MineField: React.FC<MineFieldPropsType> = ({ board, onOpenField, onSelectField}) => {
  const rows = board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} onOpen={() => onOpenField(r, c)} onSelect={() => onSelectField(r, c)} />
    })
    return <View key={r}>{columns}</View>
  })
  return <View style={styles.container}>{rows}</View>
}

export default MineField

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#eee"
  }
}) 