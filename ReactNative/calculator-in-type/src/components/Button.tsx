import React from "react"
import { StyleSheet, Text, Dimensions, TouchableHighlight, StyleSheetProperties, ViewStyle } from "react-native"

interface typeProps {
  double?: boolean,
  triple?: boolean,
  label: string,
  onClick: ((param1?: any) => void),
}
interface baseStyle {
  button: ViewStyle,
  operationButton: ViewStyle
  buttonDouble: ViewStyle
  buttonTriple: ViewStyle
}

const styles = StyleSheet.create<baseStyle>({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').height / 6.8,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },

  operationButton: {
    color: "#fff",
    backgroundColor: "",
  },

  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },

  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
})

const Button: React.FC<typeProps> = ({label, double, triple, onClick}) => {
  const stylesButton = [ styles.button ]

  if (double) stylesButton.push(styles.buttonDouble)
  if (triple) stylesButton.push(styles.buttonTriple)

  return(
    <TouchableHighlight onPress={() => onClick(label)}>
      <Text style={stylesButton}>{label}</Text>
    </TouchableHighlight>
  )
}

export default Button