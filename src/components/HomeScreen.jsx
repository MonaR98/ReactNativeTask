import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from './common/Header';
import RecommendedProducts from './common/RecommendedProducts';
import { ScrollView } from 'react-native-gesture-handler';
import DiscountCard from './common/DiscountCard';
import { COLORS } from '../constants/theme';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const HomeScreen = () => {
  return (
    <View style={styles.main_container}>
      <Header />
      <ScrollView horizontal style={{ height: wp(55), }}>
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
    justifyContent: 'flex-start',
  },
})