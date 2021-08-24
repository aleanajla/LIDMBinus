import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Platform, Dimensions, FlatList, ViewPropTypes} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Settingss, SocialMedia, BankAccount, PersonalData, PersonalContact, UrgentContact } from '../../pages/index.js'
import Modal from 'react-native-modal'

const ProfileSettings = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
        <View style={styles.pages}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Settingss',{type:''});}}>
                    <Image source = {require('../../assets/icons/arrowBack.png')} style={[styles.header, {width : 24, height:24}]}/>
                </TouchableOpacity>
            </View>
            <View style={styles.changeProfile}>
                <View style={styles.borderUser}>
                    <Image source = {require('../../assets/icons/userBlack.png')} style={styles.user}/>
                </View>
                <View style={styles.changeText}>
                    <Text style={styles.text}>Ganti Gambar Profil</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.eachContainer}>
                    <TouchableOpacity
                        onPress={()=>{navigation.navigate('PersonalData',{type:''});}}
                        style={styles.left}
                    >
                            <Text style={styles.data}>Data Pribadi</Text>
                    </TouchableOpacity>
                    <View style={styles.right}>
                        <Image source = {require('../../assets/icons/arrowForward.png')}/>
                    </View>
                </View>
                <View style={styles.eachContainer}>
                    <TouchableOpacity style={styles.left} 
                        onPress={()=>{navigation.navigate('PersonalContact',{type:''});}}
                    >
                            <Text style={styles.data}>Kontak Pribaadi</Text>
                    </TouchableOpacity>
                    <View style={styles.right}>
                        <Image source = {require('../../assets/icons/arrowForward.png')}/>
                    </View>
                </View>
                <View style={styles.eachContainer}>
                    <TouchableOpacity style={styles.left} 
                        onPress={()=>{navigation.navigate('UrgentContact',{type:''});}}
                    >
                        <Text style={styles.data}>Kontak Mendesak</Text>
                    </TouchableOpacity>
                    <View style={styles.right}>
                        <Image source = {require('../../assets/icons/arrowForward.png')}/>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>{navigation.navigate('SocialMedia',{type:''});}}>
                    <View style={styles.eachContainer}>
                        <View style={styles.left}>
                            <Text style={styles.data}>Media Sosial</Text>
                        </View>
                        <View style={styles.right}>
                            <Image source = {require('../../assets/icons/arrowForward.png')}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('BankAccount',{type:''});}}>
                    <View style={styles.eachContainer}>
                        <View style={styles.left}>
                            <Text style={styles.data}>Akun Bank</Text>
                        </View>
                        <View style={styles.right}>
                            <Image source = {require('../../assets/icons/arrowForward.png')}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}

export default ProfileSettings;

const styles = StyleSheet.create({
    pages:{
        backgroundColor : 'white',
        height : 900
    },
    header:{
        paddingLeft : 20,
        flexDirection : 'row',
        height : 70,
        backgroundColor : '#28527A',
        alignItems : 'center',
    },
    title3:{
        color : 'white',
        fontWeight : 'bold',
        fontSize : 25,
        left : 105
    }, 
    changeProfile :{
        height : 200,
        justifyContent : 'center',
        alignItems : 'center'
    },
    user:{
        height : 51,
        width : 51,
    },
    borderUser:{
        width : 80,
        height : 80,
        backgroundColor : '#F6F5F5',
        borderRadius : 50,
        justifyContent : 'center',
        alignItems : 'center'

    },
    changeText:{
        backgroundColor : '#28527A',
        width :170,
        height : 38,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 12,
        borderRadius : 10
    },
    text:{
        color: 'white',
        fontSize : 15
    },
    container:{
        alignItems : 'center',
        marginTop : 10
    },
    eachContainer:{
        backgroundColor : '#F6F5F5',
        width : 326,
        height : 40,
        borderRadius : 10,
        // justifyContent : 'center',
        alignItems : 'center',
        paddingLeft : 22,
        paddingRight : 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:7,
        flexDirection : 'row',
        marginBottom : 18
    },
    data:{
        color : '#022E57',
        fontSize : 20,
        fontWeight : 'bold'
    },
    left:{
        width : '80%'
    },
    right:{
        width : '20%',
        alignItems : 'flex-end',
    }

})