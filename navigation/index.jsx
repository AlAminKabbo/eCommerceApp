import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { colors } from '../theme';
import Home from '../screens/home';


const THEME = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
};

export default function Navigation() {
    return (
     <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={BottomTabNavigation} />
    </Stack.Navigator>
    )
}
const BottomTab = createBottomTabNavigator();

function BottomTabNavigation() {
    return (
        <BottomTab.Navigator
        inittialRouteName="Home"
        tabBarOptions={{ activeTinColor: colors.primary}}
        >
        <BottomTab.Screen name="Home" component={HomeStackScreens} />
        </BottomTab.Navigator>
    )
}

const  HomeStack = createStackNavigator();
function HomeStackScreens() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false}}>
        <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>
    )
}