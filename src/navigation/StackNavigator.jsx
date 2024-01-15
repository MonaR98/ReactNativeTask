import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import ProductDetailsScreen from "../components/ProductDetailsScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (<Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Tabs' component={TabNavigator} />
        <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
    </Stack.Navigator>)
}

export default StackNavigator;