import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from './common/Icon';
import { RoundButton } from './common/ButtonComponent';
import { increaseCount, removeItem } from '../rtk/cartSlice';
import { useDispatch } from 'react-redux';

const CartItemCard = ({ item }) => {
    const dispatch = useDispatch()

    const increasedCount = (item) => {
        dispatch(increaseCount(item))
    }
    const decreaseCount = (item) => {
        dispatch(removeItem(item))
    }
    return (
        <View style={styles.main_container}>
            <View style={styles.icon_container}>
                {item.thumbnail ? <Image style={{ width: wp(10), height: wp(10), borderRadius: 6, }} source={{ uri: item.thumbnail }} /> : <Icon icon={'ImageIcon'} size={55} color='#A1ABC0' />}
            </View>
            <View style={styles.details_container}>
                <Text>{item.title}</Text>
                <Text>{`$${item.price}`}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <RoundButton label={'+'} onpress={() => increasedCount(item)} />
                <Text>{item.quantity}</Text>
                <RoundButton label={"-"} onpress={() => decreaseCount(item)} />
            </View>
        </View>
    )
}

export default CartItemCard

const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row',
        borderRadius: 12,
        backgroundColor: 'white',
        width: wp(100),
        height: hp(10),
        paddingHorizontal: 6,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: COLORS.light_gray,
    },
    icon_container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: wp(1),
        borderColor: COLORS.light_gray,
    },
    details_container: {
        justifyContent: 'center',
        padding: wp(2),
        width: wp(50),
    },
    quantity_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        alignSelf: 'center',
        padding: 12,
    },
    item_count: {
        fontSize: 14,
        marginHorizontal: 12
    },
})