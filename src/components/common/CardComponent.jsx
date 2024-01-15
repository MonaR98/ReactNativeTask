import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'
import Icon from './Icon';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const CardComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.card_container}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
        <View>
          <Icon icon={'Heart'} color='coral' size={24} />
        </View>
        <View style={styles.icon_container}>
          <Icon icon={'ImageIcon'} size={55} color='#A1ABC0' />
        </View>
      </TouchableOpacity>
      <View style={styles.price_details}>
        <View>
          <Text style={styles.product_price}>
            $34.5
          </Text>
          <Text style={styles.product_title}>
            Clown Tag H03
          </Text>
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity onPress={() => Alert.alert('Added to your cart!')}>
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
    marginVertical: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  product_price: {
    fontSize: 16,
    fontWeight: '400'
  },
  product_title: {
    color: '#1E222B',
    fontWeight: '200'
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
    alignSelf: 'baseline'
  },
  button_label: { color: 'white', fontSize: 21, marginTop: -2 }
})