import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {home, learning, perpus, schedule, score} from '../pages';
import { BottomTabNavigator } from '../components';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator tabBar={props => <BottomTabNavigator {...props}/>} >
            <Tab.Screen name="perpus" component={perpus} />
            <Tab.Screen name="score" component={score} />
            <Tab.Screen name="home" component={home} />
            <Tab.Screen name="schedule" component={schedule} />
            <Tab.Screen name="learning" component={learning} />
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
