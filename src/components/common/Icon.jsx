import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import icons from '../../constants/icons'
const Icon = ({ containerStyle, onpress, icon, style, size = 18, color }) => {

    const image = (
        <View style={containerStyle}>
            <Image source={icons[icon]} style={[{ width: size, height: size, tintColor: color ? color : 'black', }, style]} />
        </View>
    );
    if (onpress) {
        return <TouchableOpacity onPress={onpress}>{image}</TouchableOpacity>
    }
    return image;
}

export default Icon;
