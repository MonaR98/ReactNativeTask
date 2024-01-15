import { StatusBar, View, StyleSheet } from 'react-native'
import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/rtk/store';

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>

  )
}

export default App;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})
