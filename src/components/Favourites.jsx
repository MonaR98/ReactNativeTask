import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Favourites = () => {
  const wishlistItems = useSelector((store) => store.wishlist)
  return (
    <View>
      {wishlistItems.map((item) => { return <Text key={item.id}>{item.title}</Text> })}
      <Text>Favourites</Text>
    </View>
  )
}

export default Favourites

const styles = StyleSheet.create({})