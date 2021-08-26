import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Profile, Notificationn } from '../../pages/index.js'
import { useNavigation } from '@react-navigation/core'

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style = {styles.header}>
            <View style = {styles.welcome}>
                <Text style = {{fontSize: 14, color : '#28527A'}}>Selamat Datang,</Text>
                <Text style = {{fontSize: 20,fontWeight: 'bold', color: WARNA_SEKUNDER}}>Andrew Willy</Text>
            </View>
            <View style = {styles.imgHeader}>
                <TouchableOpacity
                onPress = {()=>{
                    navigation.navigate('Notification',{type:''})
                }}>
                    <Image source ={require('../../assets/icons/bell.png')} style = {styles.bell} />
                </TouchableOpacity>
                
                <TouchableOpacity
                onPress = {()=>{
                    navigation.navigate('Profile',{type:''})
                }}> 
                    <Image source = {require('../../assets/icons/profile.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    welcome :{
        paddingLeft: 30
    },
    header :{
        flexDirection : 'row',
        paddingTop: 15,
        backgroundColor: '#F6F5F5'
    },
    imgHeader :{
        flexDirection : 'row',
        justifyContent : 'flex-end',
        paddingRight : 20,
        // justifyContent : 'space-between',
        flex: 1
    },
    bell :{
        // fontSize : 25, 
        padding : 17,
        right:10,
        top:3.5
    },
    garis:{
        paddingTop: 8,
        borderBottomColor: '#28527A',
        borderBottomWidth: 1,
        // elevation: 5,
    },

})
