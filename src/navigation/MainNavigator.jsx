
import { SafeAreaView } from "react-native";
import React from 'react'
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ marginTop: 0, backgroundColor: '#F8FFFB' }}>
            </SafeAreaView>
            <StackNavigator />
        </NavigationContainer>
    )
}

export default MainNavigator
