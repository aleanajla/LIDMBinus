import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { WARNA_SEKUNDER } from '../../utils/constants';

function checkType(type){
    if(type == "ppt"){
        return require('../../assets/icons/ppt.png');
    }else if(type == "pdf"){
        return require('../../assets/icons/pdf.png');
    }
}

const ShareMaterialsListViewItems = ({id, title, size, type}) => (
    <View style={styles.square}>
        <View style={styles.left}>
            <Image source = {checkType(type)}/>
        </View>
        <View style={styles.right}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.mb}>{size}</Text>
        </View>
    </View>
);

export default ShareMaterialsListViewItems;

const styles = StyleSheet.create({
    square:{
        height: 72,
        width: 370,
        backgroundColor: '#CCD1D9',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 19,
        borderRadius: 15,
        flexDirection : 'row',
        elevation : 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    left:{
        justifyContent : 'center',
        paddingLeft : 16,
    },
    right:{
        paddingLeft : 16,
    },
    title:{
        fontWeight : 'bold',
        fontSize : 17,
        color : '#1B3A58DB',
        paddingTop : 22
    },
    mb:{
        fontSize : 12,
        color : WARNA_SEKUNDER,
        left : 238
    }
})