import { Alert, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../constants/theme'
import Icon from './Icon';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addItem } from '../../rtk/cartSlice';
import { addItemToWishlist, removeItemFromWishlist } from '../../rtk/wishlistSlice';

const CardComponent = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [isWishlisted, setIsWishlisted] = useState(false)
  const addToCartHandler = (item) => {
    dispatch(addItem(item))
    Alert.alert('Product has been added to you cart!')
  }
  const toggleWishlisted = () => {
    const updated = !isWishlisted;
    setIsWishlisted(updated)
    if (updated) { dispatch(addItemToWishlist(item)) }
    else { dispatch(removeItemFromWishlist(item.id)) }
  }
 
  return (
    <View style={styles.card_container}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { id: item.id })}>
        <View>
          <Icon icon={isWishlisted ? 'Heart' : 'HeartOutline'} color={isWishlisted ? 'coral' : 'black'} size={24} onpress={toggleWishlisted} />
        </View>
        <View style={styles.icon_container}>
          {item.thumbnail ? <Image style={{ width: wp(20), height: wp(20), borderRadius: 6, }} source={{ uri: item.thumbnail }} /> : <Icon icon={'ImageIcon'} size={55} color='#A1ABC0' />}
        </View>
      </TouchableOpacity>
      <View style={styles.price_details}>
        <View>
          <Text style={styles.product_price}>
            {item.currency ? `${item.currency} ${item.price}` : `$ ${item.price}`}
          </Text>
          <Text style={styles.product_title}>
            {item.title}
          </Text>
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity onPress={() => { addToCartHandler(item) }}>
            <View style={styles.button}>
              <Text style={styles.button_label}>
                +
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CardComponent

const styles = StyleSheet.create({
  card_container: {
    width: wp(40),
    height: wp(50),
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.light_gray,
    flexDirection: 'column',
    backgroundColor: COLORS.light_gray,
    padding: wp(2),
    margin: wp(4)
  },
  icon_container: {
    alignItems: 'center',
    marginVertical: wp(4)
  },
  price_details: {
    marginVertical: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  product_price: {
    fontSize: 16,
    fontWeight: '400',
    fontSize: 14
  },
  product_title: {
    color: '#1E222B',
    fontWeight: '200',
    fontSize: 12
  },

  button_container: {
    marginTop: 3
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
  button_label: { color: 'white', fontSize: 21, marginTop: -2 }
})