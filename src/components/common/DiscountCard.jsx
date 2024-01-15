import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/theme';
import Icon from './Icon';
const DiscountCard = ({ backgroundColor }) => {
    return (
        <View style={[styles.main_container, { backgroundColor: backgroundColor }]}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Icon icon={'ImageIcon'} size={55} color='white' />
            </View>
            <View style={styles.text_container}>
                <Text style={styles.light_font}>
                    Get
                </Text>
                <Text style={styles.bold_font}>
                    50% OFF
                </Text>
                <Text style={styles.light_font}>
                    On First 3 Orders!
                </Text>
            </View>
        </View>
    )
}

export default DiscountCard

const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 12,
        width: wp(70),
        height: wp(25),
        marginHorizontal: 12,
        marginVertical: 6,
    },
    text_container: {

        alignSelf: 'center'
    },
    light_font: {
        fontSize: 14,
        fontWeight: 100,
        color: 'white'
    },
    bold_font: {
        fontSize: 21,
        fontWeight: 700,
        color: 'white'
    }
})