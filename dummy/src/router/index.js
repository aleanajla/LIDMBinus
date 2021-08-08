import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Learning, Perpus, Schedule, Score } from '../pages';
import { BottomTabNavigator } from '../components';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator tabBar={props => <BottomTabNavigator {...props}/>} >
            <Tab.Screen name="Perpus" component={Perpus} options={{headerShown: false}}/>
            <Tab.Screen name="Score" component={Score} options={{headerShown: false}}/>
            <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Tab.Screen name="Schedule" component={Schedule} options={{headerShown: false}}/>
            <Tab.Screen name="Learning" component={Learning} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}

const router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}


export default router

const styles = StyleSheet.create({})
