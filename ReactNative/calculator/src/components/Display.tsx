import React from "react"
import { StyleSheet, Text, View } from "react-native"

interface typeProps {
  value: string,
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    minHeight: 120,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#0009",
    alignItems: "flex-end",
  },
  displayValue: {
    fontSize: 60,
    color: "#fff",
  }
})

const Display = (props: typeProps) => {
  return(
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>{props.value}</Text>
    </View>
  )
}

export default Display