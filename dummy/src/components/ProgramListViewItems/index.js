import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { WARNA_SEKUNDER } from '../../utils/constants';

const ProgramListViewItems = ({id, program, date, image_url}) => (
    //<TouchableOpacity onPress={()=> setModalVisible(true)}>
        <View style = {[date === "Tutup" ? styles.conRow1 : styles.conRow2]}>
            <View style = {styles.conImage}>
                <Image source={{uri: image_url}} style={styles.pic}/>
            </View>
            <View style = {styles.conTitle}>
                <Text style = {styles.titleProg}>{program}</Text>
            </View>
            <View>
                <Text style = {styles.regPeriod}>Periode Pendaftaran:</Text>
                <Text style = {styles.closed}>{date}</Text>
            </View>
        </View>
    //</TouchableOpacity>
);

export default ProgramListViewItems;

const styles = StyleSheet.create({
    conRow1: {
        backgroundColor: '#8AC4D0',
        margin: 5,
        borderRadius: 20,
        width: 120,
        height: 200,
    },
    conRow2: {
        backgroundColor: '#28527A',
        margin: 5,
        borderRadius: 20,
        width: 120,
        height: 200
    },
    conImage: {
        paddingBottom: 5,
        alignItems: 'center',
        padding: 10,
    },
    titleProg: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'Open_Sans',
        textAlign: 'center',
    },
    conTitle: {
       width: 90,
       height:65,
       marginLeft: 12,
    },
    regPeriod: {
        alignItems: 'center',
        fontSize: 10,
        color: '#FFFFFF',
        fontWeight: 'bold',
        alignContent: 'flex-end',
        paddingLeft : 8
    },
    closed: {
        fontSize: 10,
        color: '#FFFFFF',
        justifyContent: 'flex-end',
        paddingLeft : 8,
    },
    pic:{
        width:70,
        height:70,
        // backgroundColor : 'yellow'
    }
})