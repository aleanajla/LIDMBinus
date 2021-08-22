import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DetailAnnouncement } from '../../pages';
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'


const AnnouncementListViewItems = ({id, date, title, description}) => (
    <View style={styles.container}>
            <Text style={styles.title}>Pembukaan Pendaftaran Mobilitas Mahasiswa Internasional – IISMA</Text>
            <Text style={styles.desc}>11 May 2021</Text>
    </View>
);

export default AnnouncementListViewItems;

const styles = StyleSheet.create({
    container:{
        width : 330,
        height : 91,
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