import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react';
import Icon from './Icon';
import { useSelector } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
const CommonHeader = ({ title, showCart , showCount}) => {
    const navigation = useNavigation();
    const cartItems = useSelector((store) => store.cart);
    return (
        <View style={[{
            justifyContent:showCart? 'space-between':'flex-start',
        }, styles.header]}>
            <View style={{ backgroundColor: COLORS.light_gray, borderRadius: 50, margin: 0, padding: 0, justifyContent: 'center', alignItems: 'center', height: 30, width: 30 }} onpPress={() => navigation.goBack()} >
                <Icon icon={'Back'} size={8} color={'black'} onpress={() => navigation.goBack()} />
            </View>
            {title && <Text style={[{ marginLeft: showCart ? 0 : 12 }, styles.title]}>{`${title}`}{(showCount && cartItems.length>0) && ` (${cartItems.length})`}</Text>}
            {showCart && <View style={{ flexDirection: 'row' }}>
                <Icon icon={'Bag'} color='black' style={{ marginRight: 12, }} size={22} onpress={() => navigation.navigate('CartScreen')} />
                {cartItems.length !== 0 && <View style={styles.cart_count}>
                    <Text style={styles.cart_count_label}>
                        {`${cartItems.length}`}
                    </Text>
                </View>}
            </View>}
        </View>
    )
}

export default CommonHeader

const styles = StyleSheet.create({
    header: {
        width: wp(99),
        height: hp(6),
        alignSelf: 'center',
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
    title: {
        fontSize: 18,
        fontWeight: Platform.OS === 'ios' ? '300':'normal',
        color: COLORS.primary_blue
    },
})