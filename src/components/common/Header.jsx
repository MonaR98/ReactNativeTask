import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme';
import Icon from './Icon';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Header = () => {
    // const cartItems = useSelector((store) => store.cart.items);
    const cartItems = ['sdsd', 'adasd']
    const navigation = useNavigation();
    return (
        <View style={styles.main_container}>
            <View style={styles.header_section}>
                <View style={styles.welcome_section}>
                    <Text style={styles.welcome_text}> Hey, Rahul</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon icon={'Bag'} color='white' style={{ marginRight: 12, }} size={22} onpress={() => navigation.navigate('CartScreen')} />
                        {cartItems.length !== 0 && <View style={styles.button}>
                            <Text style={styles.button_label}>
                                {`${cartItems.length}`}
                            </Text>
                        </View>}
                    </View>
                </View>
                <View style={styles.searchbar_container}>
                    <Icon icon={'Search'} />
                    <TextInput
                        style={styles.search_input}
                        placeholder='Search product or store'
                        placeholderTextColor={'#8891A5'}
                    />
                </View>
                <View style={styles.delivery_info_ontainer}>
                    <View style={{ padding: 12, }}>
                        <Text style={styles.light_text}>DELIVERY TO</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dark_text}>Green Way 3000, Sylhet</Text>
                            <Icon icon='DownArrow' size={5} color={COLORS.light_gray} style={styles.arrow_icon} />
                        </View>
                    </View>
                    <View style={{ padding: 12, }}>
                        <Text style={styles.light_text}>WITHIN</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dark_text}>1 Hour</Text><Icon icon='DownArrow' size={5} color={COLORS.light_gray} style={styles.arrow_icon} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    main_container: {
        marginBottom: wp(1)
    },
    header_section: {
        flexDirection: 'column',
        backgroundColor: COLORS.secondary_blue,
        width: wp(100),
        height: hp(25),
        justifyContent: 'space-between',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    welcome_section: {
        flexDirection: 'row',
        paddingTop: hp(4),
        justifyContent: 'space-between',
        paddingHorizontal: wp(2)
    },
    welcome_text: {
        color: 'white',
        fontSize: hp(4),
        fontWeight: 200
    },
    button: {
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
    button_label: {
        color: 'white',
        fontSize: 12,
    },
    searchbar_container: {
        borderWidth: 1,
        borderRadius: 50,
        height: 40,
        borderColor: COLORS.primary_blue,
        backgroundColor: COLORS.primary_blue,
        color: COLORS.light_gray,
        paddingHorizontal: 12,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: wp(5),
        width: wp(92),
        alignSelf: 'center'
    },
    search_input: {
        borderWidth: 1,
        width: wp(70),
        borderRadius: 50,
        height: 40,
        borderColor: COLORS.primary_blue,
        backgroundColor: COLORS.primary_blue,
        color: COLORS.light_gray,
        paddingHorizontal: 12,
        fontSize: wp(3)
    },
    delivery_info_ontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    light_text: {
        color: COLORS.light_gray,
        opacity: .5,
        fontWeight: 700,
        fontSize: 11
    },
    dark_text: {
        color: COLORS.light_gray,
        fontWeight: 500,
        fontSize: 14
    },
    arrow_icon: {
        marginTop: 6,
        marginLeft: 5
    },
})