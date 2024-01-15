import { StatusBar, View, StyleSheet } from 'react-native'
import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
const App = () => {
  return (
    <View style={styles.main_container}>
      <StatusBar
        animated={true}
        backgroundColor={'black'}
        barStyle={'default'}
        showHideTransition={'slide'}
        hidden={false}
      />
      <MainNavigator />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,

  }
})
