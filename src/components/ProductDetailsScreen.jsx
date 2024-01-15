import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import useProductDetails from './hooks/useProductDetails';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from './common/Icon';
import { useSelector } from 'react-redux';
import { COLORS } from '../constants/theme';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import ButtonComponent from './common/ButtonComponent';
import { useDispatch } from 'react-redux';
import { addItem } from '../rtk/cartSlice';

const ProductDetailsScreen = ({ navigation, route }) => {
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch()
  const { id } = route.params
  const details = useProductDetails(id)
  const [isAddToCartClicked, setClicked] = useState(false)
  const addToCartHandler = () => {
    setClicked(true);
    dispatch(addItem(details));

  }
  const buyNowHandler = () => {
    if (!isAddToCartClicked) {
      dispatch(addItem(details));
    }
    navigation.navigate('CartScreen')
  }
  return (
    <View style={styles.main_container}>
      <View style={styles.header}>
        <View style={{ backgroundColor: COLORS.light_gray, borderRadius: 50, margin: 0, padding: 0, justifyContent: 'center', alignItems: 'center', height: 30, width: 30 }}>
          <Icon icon={'Back'} size={8} color={'black'} onpress={() => navigation.goBack()} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon icon={'Bag'} color='black' style={{ marginRight: 12, }} size={22} onpress={() => navigation.navigate('CartScreen')} />
          {cartItems.length !== 0 && <View style={styles.cart_count}>
            <Text style={styles.cart_count_label}>
              {`${cartItems.length}`}
            </Text>
          </View>}
        </View>
      </View>
      <View style={styles.title_section}>
        <Text style={styles.brand_text}>
          {details.brand}
        </Text>
        <Text style={styles.title_text}>
          {`${details.title}`}

        </Text>
        <View style={styles.rating_section}>

          <StarRatingDisplay
            starSize={18}
            rating={details.rating}
            color={COLORS.primary_yellow}
          />
          <Text style={styles.rating_text}>
            {`${details.rating}/5`}
          </Text>
        </View>
      </View>
      <View style={styles.price_section}>
        <Text style={styles.price_label}>{`$${details.price}`}</Text>
        <View style={styles.discount_badge}>
          <Text style={styles.discount_text}>{`${details.discountPercentage}% OFF` }</Text>
        </View>
      </View>
      <View style={styles.buttons_container}>
        <ButtonComponent label={'Add To Cart'} onpress={addToCartHandler} />
        <ButtonComponent label={'Buy Now'} onpress={buyNowHandler} isFilled={true} />
      </View>
      <View style={styles.description_container}>
        <Text style={styles.description_heading}>Details</Text>
        <Text style={styles.description}>{details.description}</Text>
      </View>
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    width: wp(99),
    height: hp(6),
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12
  },
  cart_count: {
    backgroundColor: COLORS.primary_yellow,
    borderRadius: 50,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginLeft: 12,
    marginTop: -5
  },
  cart_count_label: {
    color: 'white',
    fontSize: 12,
  },
  title_section: {
    margin: 12,
    padding: 12
  },
  brand_text: {
    fontSize: 31,
    fontWeight: '300'
  },
  title_text: {
    fontSize: 31,
    fontWeight: '500'
  },
  rating_section: {
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  rating_text: {
    fontWeight: '200',
    marginLeft: 3
  },
  price_section: {
    flexDirection: "row",
    paddingHorizontal: 12,
    alignItems:'center'
  },
  price_label: {
    fontWeight:'500',
    color: COLORS.secondary_blue,
    fontSize:16
  },
  discount_badge: {
    marginHorizontal: 6,
    width: wp(21),
    height: hp(3),
    backgroundColor: COLORS.secondary_blue,
    justifyContent: 'center',
    alignItems: 'center',
   borderRadius:21
  },
  discount_text: {
    color: 'white',
    fontWeight: '200',
    fontSize:12
  },
  buttons_container: {
    height: hp(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3)
  },
  description_container: {
    padding: 12
  },
  description_heading: {
    fontSize: 16,
    fontWeight: '400'
  },
  description: {
    fontSize: 14,
    fontWeight: '200'
  }
})