import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, 
        Learning, 
        Perpus, 
        Schedule, 
        Score, 
        Program, 
        News, 
        CreateAccount, 
        Register, 
        SignIn, 
        Profile,  
        Settingss,
        ShareMaterials, 
        VideoLearning, 
        Magang, 
        DetailsProgram, 
        BrowseAllRewards, 
        ConTerms, 
        DetailNews, 
        Announcement, 
        DetailAnnouncement,
        howToGetPoints,
        Certificate,
        myRewards,
        Notificationn,
        Information,
        GetStarted,
        ProfileSettings
} from '../pages/index.js';
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
            <Stack.Screen name="Settingss" component={Settingss} options={{headerShown: false}}/>
            <Stack.Screen name="ShareMaterials" component={ShareMaterials} options={{headerShown: false}}/>
            <Stack.Screen name="VideoLearning" component={VideoLearning} options={{headerShown: false}}/>
            <Stack.Screen name="Magang" component={Magang} options={{headerShown: false}}/>
            <Stack.Screen name="DetailsProgram" component={DetailsProgram} options={{headerShown: false}}/>
            <Stack.Screen name="BrowseAllRewards" component={BrowseAllRewards} options={{headerShown: false}}/>
            <Stack.Screen name="ConTerms" component={ConTerms} options={{headerShown: false}}/>
            <Stack.Screen name="DetailNews" component={DetailNews} options={{headerShown: false}}/>
            <Stack.Screen name="Announcement" component={Announcement} options={{headerShown: false}}/>
            <Stack.Screen name="DetailAnnouncement" component={DetailAnnouncement} options={{headerShown: false}}/>
            <Stack.Screen name="howToGetPoints" component={howToGetPoints} options={{headerShown: false}}/>
            <Stack.Screen name="Certificate" component={Certificate} options={{headerShown:false}}/>
            <Stack.Screen name="myRewards" component={myRewards} options={{headerShown:false}}/>
            <Stack.Screen name="Notificationn" component={Notificationn} options={{headerShown: false}}/>
            <Stack.Screen name="Information" component={Information} options={{headerShown: false}}/>
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}}/>
            <Stack.Screen name="ProfileSettings" component={ProfileSettings} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default router;

const styles = StyleSheet.create({

})
