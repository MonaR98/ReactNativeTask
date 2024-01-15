import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import CardComponent from './CardComponent';


const RecommendedProducts = () => {
    return (
        <View>
            <Text style={styles.text}>
                Recommended
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <CardComponent />
                <CardComponent />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <CardComponent />
                <CardComponent />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <CardComponent />
                <CardComponent />
            </View>
        </View>
    )
}

export default RecommendedProducts

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 300,
        marginHorizontal: 12
    }
})