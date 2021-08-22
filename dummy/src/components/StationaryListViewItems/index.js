import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { WARNA_SEKUNDER } from '../../utils/constants';


const StationaryVoucherListViewItems = ({id, company, description, point}) => (
    <View style={styles.container}>
        <View style={styles.boxTop}>
            {/* <Image source = {require('../../assets/images/shopee.png')}/> */}
            {/* <Image source = {require('../../assets/images/gojek.png')}/> */}
        </View>
        <View style={styles.boxBottom}>
            <Text style={styles.title}>{company}</Text>
            <Text style={styles.desc}>{description}</Text>
            <Text style={styles.desc}>{point}</Text>
            <View style={styles.reedemBox}>
                <Text style={styles.reedem}>Reedem</Text>
            </View>
        </View>
    </View>
);

export default StationaryVoucherListViewItems;

const styles = StyleSheet.create({
    container:{
        width : 161,
        height : 167,
        backgroundColor : '#F6F5F5',
        left : 17,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10,
        marginBottom : 20,
        marginRight : 17,
    },
    boxTop:{
        width : '100%',
        height : 70,
        justifyContent : 'center',
        alignItems : 'center'
    },
    boxBottom:{
        width : '100%',
        backgroundColor : 'white',
        // height : '100%'
        height : 97,
        padding : 8,
    },
    title:{
        fontSize : 15,
        color : '#022E57',
        fontWeight : 'bold'
    },
    desc:{
        fontSize : 11,
        color : '#022E57'
    },
    reedemBox:{
        width : 71,
        backgroundColor : '#FAD586',
        height : 23,
        marginTop : 4,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    reedem:{
        fontSize : 12,
        color : '#28527A',
        fontWeight : 'bold'
    }
})