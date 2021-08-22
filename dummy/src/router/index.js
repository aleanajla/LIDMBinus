import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Learning, Perpus, Schedule, Score } from '../pages';
import { BottomTabNavigator } from '../components';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { Book4, Group8, Home2,Study4,Test4 } from '../assets';
import Register from '../pages/Register'
import { NavigationContainer } from '@react-navigation/native';
import newsDetail from '../pages/newsDetail';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 

const MainApp = () => {
    return(
        <SafeAreaView style={{flex:1}} forceInset={{top: "always", bottom: "never"}}>
            <Tab.Navigator>
                <Tab.Screen name="Perpus" component={Perpus} options={{
                    headerShown: false,
                    tabBarLabel:'Perpus',
                    showLabel : false,
                    tabBarIcon:({focused}) => {
                        const image = focused
                        ? require('../assets/iconNavbar/home.png')
                        : require('../assets/iconNavbar/home.png')
                        return(
                            <Image
                                source = {image}
                                reziseMode = 'contain'
                                style = {{
                                    width: 25,
                                    height: 25
                                }}
                            />
                        )
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
                <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
                <Stack.Screen name="NewsDetail" component={newsDetail} options={{headerShown: false}}/>
            </Stack.Navigator>
    )
}


export default router

const styles = StyleSheet.create({})
