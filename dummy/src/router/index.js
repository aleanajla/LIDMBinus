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
        ProfileSettings,
        SocialMedia,
        BankAccount,
        CompleteDocument,
        ChangePassword,
        Header,
        PersonalData,
        PersonalContact,
        UrgentContact,
        Recomend,
        MoreBooks,
        Register2,
        Register3,
        DetailsBook
} from '../pages/index.js';
import { BottomTabNavigator } from '../components';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { WARNA_SEKUNDER, WARNA_UTAMA, WARNA_TITLE, KUNING } from '../utils/constants.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabBarNavigation = () => {
    return (
    <View style={{flex:1}}>
        <Header/>
        <TopTab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 12, 
                    backgroundColor : KUNING, 
                    color: WARNA_SEKUNDER, 
                    padding:10, 
                    height:40,
                    width:100, 
                    alignItems : 'center', 
                    justifyContent:'center',
                    borderRadius:20, 
                    fontWeight : 'bold'},
                    tabBarStyle: { backgroundColor: WARNA_UTAMA},
            }}
            >
                <TopTab.Screen 
                    name ="Dasbor" 
                    component={Home}
                    // options={{backgroundColor : WARNA_SEKUNDER}}
                />
                <TopTab.Screen 
                    name ="Program" 
                    component={Program} 
                />
                <TopTab.Screen 
                    name ="Berita" 
                    component={News} 
                />
            </TopTab.Navigator>
        </View>
    )
}

const TopTabLearning = createMaterialTopTabNavigator();

const TopTabBarLearning = () => {
    return(
        <View style={{flex:1}}>
            <Header/>
            <TopTabLearning.Navigator
                    screenOptions={{
                    tabBarLabelStyle: {
                        fontSize: 12, 
                        backgroundColor : KUNING, 
                        color: WARNA_SEKUNDER, 
                        padding:10, 
                        height:50,
                        width:100, 
                        alignItems : 'center', 
                        justifyContent:'center',
                        borderRadius:20, 
                        fontWeight : 'bold'},
                    tabBarStyle: { backgroundColor: WARNA_UTAMA},
            }}
            >   
                <TopTabLearning.Screen
                    name="Video Terkait"
                    component={VideoLearning}
                />
                <TopTabLearning.Screen
                    name="Materi Terkait"
                    component={ShareMaterials}
                />
                <TopTabLearning.Screen
                    name="Buku Terkait"
                    component={Learning}
                />
            </TopTabLearning.Navigator>
        </View>
        
    )

}

const MainApp = () => {
    return(
        <SafeAreaView style={{flex:1}} forceInset={{top: "always", bottom: "never"}}>
            <Tab.Navigator tabBar={props => <BottomTabNavigator {...props}/>}>
                <Tab.Screen name="Perpus" component={Perpus} options={{headerShown: false}}/>
                <Tab.Screen name="Score" component={Score} options={{headerShown: false}}/>
                <Tab.Screen name="Home" component={TopTabBarNavigation} options={{headerShown: false}}/>
                <Tab.Screen name="Schedule" component={Schedule} options={{headerShown: false}}/>
                <Tab.Screen name="Learning" component={TopTabBarLearning} options={{headerShown: false}}/>
            </Tab.Navigator>
        </SafeAreaView>
    )
}

const router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
            {/* <Stack.Screen name="Program" component= {Program} options= {{headerShown: false}}/> */}
            {/* <Stack.Screen name="News" component={News} options={{headerShown: false}}/> */}
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown: false}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
            <Stack.Screen name="Settingss" component={Settingss} options={{headerShown: false}}/>
            {/* <Stack.Screen name="ShareMaterials" component={ShareMaterials} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="VideoLearning" component={VideoLearning} options={{headerShown: false}}/> */}
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
            <Stack.Screen name="Notification" component={Notificationn} options={{headerShown: false}}/>
            <Stack.Screen name="Information" component={Information} options={{headerShown: false}}/>
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}}/>
            <Stack.Screen name="ProfileSettings" component={ProfileSettings} options={{headerShown: false}}/>
            <Stack.Screen name="SocialMedia" component={SocialMedia} options={{headerShown: false}}/>
            <Stack.Screen name="BankAccount" component={BankAccount} options={{headerShown: false}}/>
            <Stack.Screen name="CompleteDocument" component={CompleteDocument} options={{headerShown: false}}/>
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{headerShown: false}}/>
            <Stack.Screen name="PersonalData" component={PersonalData} options={{headerShown: false}}/>
            <Stack.Screen name="PersonalContact" component={PersonalContact} options={{headerShown: false}}/>
            <Stack.Screen name="UrgentContact" component={UrgentContact} options={{headerShown: false}}/>
            <Stack.Screen name="Recomend" component={Recomend} options={{headerShown: false}}/>
            <Stack.Screen name="MoreBooks" component={MoreBooks} options={{headerShown: false}}/>
            <Stack.Screen name="Register2" component={Register2} options={{headerShown: false}}/>
            <Stack.Screen name="Register3" component={Register3} options={{headerShown: false}}/>
            <Stack.Screen name="DetailsBook" component={DetailsBook} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default router;

const styles = StyleSheet.create({

})
