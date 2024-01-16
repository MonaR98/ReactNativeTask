import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import CardComponent from './CardComponent';
import useProductsList from '../../hooks/useProductsList';
import { COLORS } from '../../constants/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const RecommendedProducts = () => {
   
    const { productList, loading} = useProductsList()

    const renderItem = ({ item }) => {
        return <CardComponent item={item} />
    }
    return (<View>
        {loading ? <View style={{ flex: 1, backgroundColor: COLORS.backgroundColor, justifyContent: 'center', alignItems: 'center', marginBottom: hp(58), }}><ActivityIndicator color="#000000" style={{}} /></View> 
       : <FlatList
            data={productList.products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
        />}
    </View>
    
    )
}

export default RecommendedProducts

