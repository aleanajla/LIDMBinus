import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { WARNA_SEKUNDER } from '../../utils/constants';

const NotificationListViewItems = ({id, title, date}) => (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
    </View>
);

export default NotificationListViewItems;

const styles = StyleSheet.create({
    container:{
        width : 338,
        height : 75,
        backgroundColor : '#F6F5F5',
        borderRadius : 25,
        justifyContent : 'center',
        paddingLeft : 14,
        paddingRight : 14,
        margin : 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:7,
    },
    title:{
        fontSize : 14,
        color : '#28527A',
        fontWeight : 'bold'
    },
    date:{
        color : '#28527A',
        fontSize : 12,
        paddingTop : 5
    }
})