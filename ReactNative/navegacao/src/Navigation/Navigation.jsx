import React from "react"
import { SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// import Drawer from "./Drawer"
import Tab from "./Tab"
// import Stack from "./Stack"

const styles = {
  container: {
    flex: 1,
  }
}

const Navigation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab />
        {/*
        <Drawer />
        <Stack />
      */}
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigation