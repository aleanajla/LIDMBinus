import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DetailAnnouncement } from '../../pages';
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'


const AnnouncementListViewItems = ({id, date, title, description, navigation}) => (
    <TouchableOpacity onPress= {() => { 
        navigation.navigate('DetailAnnouncement', {id: id, title: title, description: description,date: date}); //kirim data
    }}>
        <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{date}</Text>
        </View>
    </TouchableOpacity>
);

export default AnnouncementListViewItems;

const styles = StyleSheet.create({
    container:{
        width : 330,
        height : 80,
        backgroundColor : 'white',
        borderRadius : 20,
        justifyContent : 'center',
        paddingLeft : 19,
        left : 26,
        marginTop : 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10
    },
    title:{
        fontSize : 17,
        color : '#28527A',
        fontWeight : 'bold'
    },
    desc:{
        color : '#28527A',
        fontSize : 15,
        paddingTop : 5
    }
})