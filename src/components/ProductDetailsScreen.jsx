import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import React, { useState } from 'react';
import useProductDetails from '../hooks/useProductDetails';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../constants/theme';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import ButtonComponent from './common/ButtonComponent';
import { useDispatch } from 'react-redux';
import { addItem } from '../rtk/cartSlice';
import CommonHeader from './common/CommonHeader';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const ProductDetailsScreen = ({ navigation, route }) => {
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

  const renderImageItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: item }} />
    </View>
  );
  return (
    <View style={styles.main_container}>
      <CommonHeader showCart={true} />
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
          <Text style={styles.discount_text}>{`${details.discountPercentage}% OFF`}</Text>
        </View>
      </View>
      <View style={{marginTop:12, width:wp(100), borderRadius:6, padding:12, backgroundColor:COLORS.light_gray}}>
        <SwiperFlatList
          data={details.images}
          renderItem={renderImageItem}
          index={0}
          showPagination
          paginationActiveColor={COLORS.primary_yellow}
          paginationDefaultColor={COLORS.primary_blue}
          paginationStyleItem={styles.paginationItem}
          paginationStyleContainer={styles.paginationContainer}
        />
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
  title_section: {
    margin: 12,
    padding: 12
  },
  brand_text: {
    fontSize: 31,
    fontWeight: Platform.OS === 'ios' ? '300' : 300
  },
  title_text: {
    fontSize: 31,
    fontWeight: Platform.OS === 'ios' ? '500' : 500
  },
  rating_section: {
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  rating_text: {
    fontWeight: Platform.OS === 'ios' ? '200' : 300,
    marginLeft: 3
  },
  imageContainer: {
    width: wp(100),
    height: wp(50),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 0,
  },
  paginationItem: {
    width: 20,
    height: 2,
    marginTop:21
  },
  price_section: {
    flexDirection: "row",
    paddingHorizontal: 12,
    alignItems: 'center'
  },
  price_label: {
    fontWeight: Platform.OS === 'ios' ? '500' : 500,
    color: COLORS.secondary_blue,
    fontSize: 16
  },
  discount_badge: {
    marginHorizontal: 6,
    width: wp(21),
    height: hp(3),
    backgroundColor: COLORS.secondary_blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 21
  },
  discount_text: {
    color: 'white',
    fontWeight: Platform.OS === 'ios' ? '200' : 200,
    fontSize: 12
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
    fontWeight: Platform.OS === 'ios' ? '400' : 400
  },
  description: {
    fontSize: 14,
    fontWeight: Platform.OS === 'ios' ? '200' : 200
  }
})