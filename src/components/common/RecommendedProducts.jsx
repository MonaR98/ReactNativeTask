import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import CardComponent from './CardComponent';
import useProductsList from '../hooks/useProductsList';

const RecommendedProducts = () => {
    const list = useProductsList()

    const renderItem = ({ item }) => {
        return <CardComponent item={item} />
    }

    return (
        <FlatList
            data={list.products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
        />
    )
}

export default RecommendedProducts

