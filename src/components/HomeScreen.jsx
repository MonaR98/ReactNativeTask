import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from './HomeHeader';
import RecommendedProducts from './common/RecommendedProducts';
import DiscountCard from './common/DiscountCard';
import { COLORS } from '../constants/theme';
import { ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.main_container}>
      <Header />
      <ScrollView horizontal style={{  marginBottom:-370 }}>
        <DiscountCard backgroundColor={COLORS.primary_yellow} />
        <DiscountCard backgroundColor={'#FFE19F'} />
      </ScrollView>
      <RecommendedProducts />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
  },
})