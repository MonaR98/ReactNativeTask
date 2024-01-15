import { Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { clearCart } from '../rtk/cartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const cartItemList = useSelector((store) => store.cart)
  const clearCartHandler = () => {
    dispatch(clearCart())
  }
  return (
    <View>
      {cartItemList.map((item) => { return <Text key={item.id}>{item.title}</Text> })}
      <TouchableOpacity onPress={clearCartHandler} style={{ borderWidth: 1, alignItems: 'center', justifyContent: 'center', width: 85, height: 55, borderRadius: 21, alignSelf:'flex-end' }} >
        <Text> Clear Cart</Text>
      </TouchableOpacity>
    </View >
  )
}

export default Cart
