import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Learning, Perpus, Schedule, Score } from '../pages';
import { BottomTabNavigator } from '../components';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { Book4, Group8, Home2,Study4,Test4 } from '../assets';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <SafeAreaView style={{flex:1}} forceInset={{top: "always", bottom: "never"}}>
            <Tab.Navigator tabBar={props => <BottomTabNavigator {...props}/>} >
                <Tab.Screen name="Perpus" component={Perpus} options={{
                    headerShown: false,
                    tabBarLabel:'Perpus',
                    showLabel : false,
                    tabBarIcon:({focused}) => {
                       <Image
                            source = {require('../assets/iconNavbar/book 4.png')}
                            reziseMode = 'contain'
                            style = {{
                                width: 20,
                                height: 20
                            }}
                       />
                    }
                }}/>
                <Tab.Screen name="Score" component={Score} options={{headerShown: false}}/>
                <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Tab.Screen name="Schedule" component={Schedule} options={{headerShown: false}}/>
                <Tab.Screen name="Learning" component={Learning} options={{headerShown: false}}/>
            </Tab.Navigator>
        </SafeAreaView>
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
