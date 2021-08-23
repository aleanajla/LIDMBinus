import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DetailAnnouncement } from '../../pages';
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'

const AnnounceListViewItems = ({id, date, title, description, navigation}) => (
    <TouchableOpacity onPress= {() => { 
        navigation.navigate('DetailAnnouncement', {id: id, title: title, description: description,date: date}); //kirim data
    }}>
        <View style = {styles.announceLR}>
            <View style = {styles.announceLR2}>
                <Text style = {styles.announcement1}>{date}</Text>
                <Text style = {styles.announcement}>{title}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

export default AnnounceListViewItems;

const styles = StyleSheet.create({
    containerAnnounce:{
        backgroundColor: '#8AC4D0',
        // padding:100,
        width:360,
        height:230,
        margin:18,
        borderRadius: 20
    },
    arrow :{
        marginLeft: 160,
        marginTop: 15,
        width: 50,
        height:30
    },
    announceLR : {
        flexDirection: 'row',
        marginTop:5,
        padding: 5
    },
    announceLR2 :{
        padding:15,
        margin: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        // flexDirection: 'row',
        shadowOffset: {
            width: 0, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10,
        width: 160,
        height:150
    },
    announcement1:{
        fontSize: 10,
        color : '#28527A'
    },
    announcement: {
        fontSize: 14,
        fontWeight: 'bold',
        color : '#28527A'
    },
})