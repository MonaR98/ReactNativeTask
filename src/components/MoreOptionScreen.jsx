import { StyleSheet, View } from 'react-native'
import React from 'react'
import CommonHeader from './common/CommonHeader'
const MoreOptionScreen = () => {
  return (
    <View style={styles.main_container}>
      <CommonHeader title={'Profile'} />
    </View>
  )
}

export default MoreOptionScreen

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'white'
  }
})