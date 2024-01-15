import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import ProductDetailsScreen from "../components/ProductDetailsScreen";
import Cart from "../components/Cart";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (<Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Tabs' component={TabNavigator} />
        <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
        <Stack.Screen name='CartScreen' component={Cart} />
    </Stack.Navigator>)
}

export default StackNavigator;