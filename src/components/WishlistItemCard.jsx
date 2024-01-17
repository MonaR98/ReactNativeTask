import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from './common/Icon';
import { removeItemFromWishlist } from '../rtk/wishlistSlice';
import { useDispatch } from 'react-redux';

const WishlistItemCard = ({ item }) => {
    const dispatch = useDispatch()
    const removeFromWishlist = (id) => {
        dispatch(removeItemFromWishlist(id))
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
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Icon icon={'Cross'} onpress={() => { removeFromWishlist(item.id) }} />
            </View>
        </View>
    )
}

export default WishlistItemCard

const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row',
        borderRadius: 12,
        backgroundColor: 'white',
        width: wp(100),
        height: hp(10),
        paddingHorizontal: 6,
        justifyContent: 'space-evenly',
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
})