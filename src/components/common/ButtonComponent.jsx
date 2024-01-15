import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/theme';
const ButtonComponent = ({ label, onpress, labelStyle, isFilled }) => {
  return (
    <View style={[{ backgroundColor: isFilled ? COLORS.secondary_blue : 'white' },styles.button_container]}>
      <TouchableOpacity onPress={onpress}>
        <Text style={[labelStyle, {color:isFilled ? 'white' : COLORS.secondary_blue, fontSize:16, fontWeight:'300'}]}>{label}</Text>
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
    borderColor:COLORS.secondary_blue
  },
})