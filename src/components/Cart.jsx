import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import CommonHeader from './common/CommonHeader';
import CartItemCard from './CartItemCard';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ButtonComponent from './common/ButtonComponent';
import { COLORS } from '../constants/theme';

const Cart = () => {
  const cartItemList = useSelector((store) => store.cart)
  const renderItem = ({ item }) => {
    return <CartItemCard item={item} />
  }
  const subtotal = cartItemList.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryCharge = Math.floor(Math.random() * (10 - 5 + 1)) + 5
  return (
    <View style={styles.main_container}>
      <CommonHeader title={'Shopping Cart'} showCount={true} />
      {cartItemList.length === 0 && <View style={styles.empty_cart_message_container}><Text style={styles.empty_cart_message}>Your cart is empty!!</Text></View>}
      <FlatList
        data={cartItemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {cartItemList.length > 0 && (<View style={styles.billing_section}>
        <View style={styles.subtotal_container}>
          <Text style={styles.subtotal_label}>Subtotal</Text>
          <Text style={styles.subtotal_value}>{`$${subtotal.toFixed(2)}`}</Text>
        </View>
        <View style={styles.subtotal_container}>
          <Text style={styles.subtotal_label}>Delivery</Text>
          <Text style={styles.subtotal_value}>{`$${deliveryCharge.toFixed(2)}`}</Text>
        </View>
        <View style={styles.subtotal_container}>
          <Text style={styles.subtotal_label}>Total</Text>
          <Text style={styles.subtotal_value}>{`$${(deliveryCharge + subtotal).toFixed(2)}`}</Text>
        </View>
        <ButtonComponent label={'Proceed To Checkout'} onpress={() => { }} style={{ width: wp(80), alignSelf: 'center', marginTop: 12 }} isFilled={true} />
      </View>
      )}
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: hp(10)
  },
  empty_cart_message_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty_cart_message: {
    color: COLORS.primary_blue,
    fontSize: 21,
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal'
  },
  billing_section: {
    borderRadius: 12,
    backgroundColor: COLORS.light_gray,
    padding: 18,
    margin: 12
  },
  subtotal_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: COLORS.light_gray,
  },
  subtotal_label: {
    fontSize: 14,
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
    color: 'black'
  },
  subtotal_value: {
    fontSize: 14,
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
    color: 'black'
  },
})

