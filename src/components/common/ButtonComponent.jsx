import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/theme';

export const RoundButton = ({ label, onpress, containerStyle, labelStyle }) => {
  return (<View style={[containerStyle, styles.round_button_container]}>
    <TouchableOpacity onPress={onpress}>
      <View style={[styles.button, { ...containerStyle }]}>
        <Text style={[styles.button_label, { ...labelStyle }]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  </View>)
}

const ButtonComponent = ({ label, onpress, labelStyle, isFilled , style }) => {
  return (
    <View style={[{ backgroundColor: isFilled ? COLORS.secondary_blue : 'white' }, styles.button_container, style]}>
      <TouchableOpacity onPress={onpress}>
        <Text style={[labelStyle, { color: isFilled ? 'white' : COLORS.secondary_blue, fontSize: 16, fontWeight: Platform.OS === 'ios' ? '300' : 'normal' }]}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
  button_container: {
    borderWidth: 1,
    width: wp(40),
    height: hp(6),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.secondary_blue
  },
  round_button_container: {
    borderColor: COLORS.light_gray,
    marginHorizontal: 8
  },
  button: {
    backgroundColor: COLORS.light_gray,
    borderRadius: 50,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_label: {
    color: 'black',
    fontSize: 18,
    marginTop: -2,
    fontWeight: Platform.OS === 'ios' ? '200' : 'normal',
  },
})