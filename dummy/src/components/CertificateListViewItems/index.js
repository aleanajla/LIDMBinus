import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'


const CertificateListViewItems = ({id, title, date}) => (
    <View style = {[styles.box, styles.shadowBox]}>
        <View>
            <Text style = {styles.title}>{title}</Text>
            <Text style = {styles.date}>{date}</Text>
        </View>
        <View>
            <Image source = {require('../../assets/icons/download.png')} style ={styles.download}/>
        </View>
    </View>
);

export default CertificateListViewItems;

const styles = StyleSheet.create({
    box:{
        flexDirection:'row',
        width:350,
        height:75,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        marginBottom:15,
        paddingTop:10,
        paddingLeft:15,
        margin : 5
    },
    title:{
        fontSize:15,
        fontWeight:'800',
        width:272,
        height:37,
        color:'#022E57'
    },
    date:{
        fontSize:12,
        marginTop:5
    },
    download:{
        marginTop:15,
        marginLeft:15
    },
    shadowBox:{
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:6,
    }
})