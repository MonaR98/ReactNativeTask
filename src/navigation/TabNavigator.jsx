import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/HomeScreen';
import Categories from '../components/Categories';
import Favourites from '../components/Favourites';
import { COLORS } from '../constants/theme';
import Icon from '../components/common/Icon';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import MoreOptionScreen from '../components/MoreOptionScreen';
const Tab = createBottomTabNavigator();

const tabs = [
    {
        name: "Home",
        screen: HomeScreen,
        filledIcon: 'HomeFilled'
    },
    {
        name: "Category",
        screen: Categories,
        filledIcon: 'CategoriesFilled'
    },
    {
        name: "Favourite",
        screen: Favourites,
        filledIcon: 'FavouriteFilled'
    },
    {
        name: "More",
        screen: MoreOptionScreen,
        filledIcon: 'MoreFilled'
    },

]
const TabNavigator = () => {
    const navigation = useNavigation()
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, }}>
            {tabs.map(({ name, screen, }) => {
                return <Tab.Screen
                    key={name}
                    name={name}
                    component={screen}
                    options={{
                        tabBarLabel: ({ focused }) => { return <Text style={{ color: '#354349' }}>{focused ? '' : `${name}`}</Text> },
                        tabBarItemStyle: { borderWidth: 0, borderRadius: 6, padding: 6, justifyContent: 'space-around' },
                        tabBarIcon: ({ focused }) => {
                            return <Icon
                                icon={name}
                                style={{
                                    backgroundColor: focused ? 'black' : 'white',
                                }}
                                color={focused ? COLORS.primary_yellow : '#354349'}
                                onpress={() => { navigation.navigate(`${name}`) }}
                                size={focused ? 35 : 16}
                                containerStyle={{
                                    width: focused ? 50 : 30,
                                    height: focused ? 50 : 30,
                                    borderRadius: focused ? 50 : 0,
                                    marginBottom: focused ? 56 : 0,
                                    padding: focused ? 6 : 0,
                                    backgroundColor: focused ? 'black' : 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            />
                        },

                    }}
                />
            })}
        </Tab.Navigator>
    )
}

export default TabNavigator
