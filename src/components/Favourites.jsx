import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CommonHeader from './common/CommonHeader'
import WishlistItemCard from './WishlistItemCard'
import { COLORS } from '../constants/theme'
const Favourites = () => {
  const wishlistItems = useSelector((store) => store.wishlist)
  return (
    <View style={styles.main_container}>
      <CommonHeader title={'Wishlist'} showCart={true} />
      {wishlistItems.length > 0
        ?
        wishlistItems.map((item) => { return <WishlistItemCard item={item} key={item.id} /> })
        :<View style={{justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:21, color:COLORS.primary_blue}}>Nothing to show!!</Text></View>
      }
    </View>
  )
}

export default Favourites

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'white'
  }
})