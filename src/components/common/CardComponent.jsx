import { Alert, StyleSheet, Text, TouchableOpacity, View, Image, Platform } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'
import Icon from './Icon';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../rtk/cartSlice';
import { addItemToWishlist, removeItemFromWishlist } from '../../rtk/wishlistSlice';
import { RoundButton } from './ButtonComponent';

const CardComponent = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const wishlistItems = useSelector((store) => store.wishlist)
  const isItemInWishlist = wishlistItems.some((wishlistItem) => wishlistItem.id === item.id);
  const addToCartHandler = (item) => {
    dispatch(addItem({ ...item, quantity: 1 }))
  }
  const toggleWishlisted = () => {
    if (isItemInWishlist) {
      dispatch(removeItemFromWishlist(item.id))
    } else {
      dispatch(addItemToWishlist(item))
    }
  }
  return (
    <View style={styles.card_container}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { id: item.id })}>
        <View>
          <Icon icon={isItemInWishlist ? 'Heart' : 'HeartOutline'} color={isItemInWishlist ? 'coral' : 'black'} size={24} onpress={toggleWishlisted} />
        </View>
        <View style={styles.icon_container}>
          {item.thumbnail ? <Image style={{ width: wp(20), height: wp(20), borderRadius: 6, }} source={{ uri: item.thumbnail }} /> : <Icon icon={'ImageIcon'} size={55} color='#A1ABC0' />}
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.price_details}>
          <View style={{ width: wp(30) }}>
            <Text style={styles.product_price}>
              {item.currency ? `${item.currency} ${item.price}` : `$ ${item.price}`}
            </Text>
          </View>
          <View style={{ width: wp(30), margin: 1, }}>
            <Text style={styles.product_title}>
              {item.title}
            </Text>
          </View>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <RoundButton label={'+'} onpress={() => { addToCartHandler(item) }} containerStyle={styles.button} labelStyle={styles.button_label} />
        </View>
      </View>
    </View>
  )
}

export default CardComponent

const styles = StyleSheet.create({
  card_container: {
    width: wp(45),
    height: wp(50),
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.light_gray,
    flexDirection: 'column',
    backgroundColor: COLORS.light_gray,
    padding: wp(1),
    margin: wp(2)
  },
  icon_container: {
    alignItems: 'center',
    marginVertical: Platform.OS === 'ios' ? wp(4):wp(2)
  },
  price_details: {
    marginVertical: wp(2),
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  product_price: {
    fontWeight: Platform.OS === 'ios' ? '400' : 'bold',
    fontSize: 14
  },
  product_title: {
    color: '#1E222B',
    fontWeight: Platform.OS === 'ios' ? '200' : 'normal',
    fontSize: 12,
  },
  button: {
    backgroundColor: COLORS.secondary_blue,
    borderRadius: 50,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  button_label: {
    color: 'white',
    fontSize: 21,
    marginTop: Platform.OS === 'ios'?-2:-3
  }
})