import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Learning, Perpus, Schedule, Score, Program, News, CreateAccount, Register, SignIn, Profile, ShareMaterials, VideoLearning} from '../pages/index.js';
import { BottomTabNavigator } from '../components';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <SafeAreaView style={{flex:1}} forceInset={{top: "always", bottom: "never"}}>
            <Tab.Navigator tabBar={props => <BottomTabNavigator {...props}/>}>
                <Tab.Screen name="Perpus" component={Perpus} options={{headerShown: false}}/>
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
            <Stack.Screen name="Program" component= {Program} options= {{headerShown: false}}/>
            <Stack.Screen name="News" component={News} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown: false}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name="ShareMaterials" component={ShareMaterials} options={{headerShown: false}}/>
            <Stack.Screen name="VideoLearning" component={VideoLearning} options={{headerShown: false}}/>

        </Stack.Navigator>
    )
}

export default router;

const styles = StyleSheet.create({

})
