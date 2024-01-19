import { ActivityIndicator, FlatList, View, Text } from 'react-native'
import React from 'react';
import CardComponent from './CardComponent';
import useProductsList from '../../hooks/useProductsList';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/theme';
const RecommendedProducts = () => {
    const { productList, loading } = useProductsList()
    const renderItem = ({ item }) => {
        return <CardComponent item={item} />
    }
    return (
        loading ? <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp(38), }}><ActivityIndicator color="#000000" /></View>
            : <View style={{ flex: 1, padding: 12 }}>
                <Text style={{ color: COLORS.primary_blue, fontSize: 24, fontWeight: '300', }}>Recommended</Text>
                <FlatList
                    data={productList.products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    contentContainerStyle={{ flexGrow: 1, }}
                    showsVerticalScrollIndicator={false}
                    maxToRenderPerBatch={4}
                />
            </View>
    )
}

export default RecommendedProducts

