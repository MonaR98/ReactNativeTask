import { ActivityIndicator, FlatList, StyleSheet, Text, View, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS } from '../constants/theme'
import CommonHeader from './common/CommonHeader';


const Categories = () => {
    const [loading, setLoading] = useState(true)
    const [categoryList, setCategoryList] = useState([])
    const categorySet = new Set()

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        setLoading(true)
        const response = await axios.get('https://dummyjson.com/products');
        response.data.products.map((product) => { categorySet.add(product.category) })
        setCategoryList(Array.from(categorySet))
        setLoading(false)
    }

    const renderItem = ({ item }) => {
        return <TouchableOpacity>
            <View style={{ width: wp(50), height: hp(25), borderRadius: 12, margin: 2, padding: 6, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.light_gray, }}>
                <Text style={{ color: COLORS.primary_blue }}>{item.toUpperCase()}</Text>
            </View>
        </TouchableOpacity>
    }

    return (
        <View style={styles.main_container}>
            {loading ? <View style={styles.loader_container}><ActivityIndicator color={'black'} /></View>
                : (<View style={{ flexGrow: 1, }}>
                    <CommonHeader title={'Categories'} showCart={true} />
                    <FlatList
                        data={categoryList}
                        renderItem={renderItem}
                        keyExtractor={(item) => item}
                        numColumns={2}
                    />
                </View>)}
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    }
})