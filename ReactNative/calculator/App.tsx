import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const App = () => {
  const [ displayValue, setDisplayValue ] = useState<string>('0')
  const [ clearDisplay, setClearDisplay ] = useState<boolean>(false)
  const [ values, setValues ] = useState<Array<number>>([0, 0])
  const [ current, setCurrent ] = useState<number>(0)
  const [ operation, setOperation ] = useState<string | null>(null)

  function addDigit(n: string) {
    if (n == '.' && !(displayValue === '0' || clearDisplay ) && displayValue.includes('.')) {
      return
    }

    const A = displayValue === '0' || clearDisplay
    const B = A ? '' : displayValue
    setDisplayValue(B + n)
    setClearDisplay(false)

    if (n !== '.') {
      const valores = [...values]
      valores[current] = parseInt(displayValue)
      setValues(valores)
    }
  }

  function clearMemory() {
    setDisplayValue('')
  }

  function changeOperation(ope: string) {
    if (current === 0) {
      setOperation(ope)
      setCurrent(1),
      setClearDisplay(true)
    } else {
      const valores = [...values]

      try {
        valores[0] = eval(`${values[0]} ${operation} ${values[1]}`)
      } catch (e) {
        valores[0] = values[0]
      }

      valores[1] = 0
      setDisplayValue(`${valores[0]}`)
      setOperation(ope == '=' ? null : ope)
      setCurrent(ope == '=' ? 0 : 1)
      setClearDisplay(!(ope == '='))
      setValues(valores)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" onClick={clearMemory} triple />
        <Button label="/" onClick={changeOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" onClick={changeOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" onClick={changeOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" onClick={changeOperation} />
        <Button label="0" onClick={addDigit} double />
        <Button label="." onClick={addDigit} />
        <Button label="=" onClick={changeOperation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default App;
