import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { WARNA_SEKUNDER } from '../../utils/constants';
import { DetailsProgram } from '../../pages';
import { useNavigation } from '@react-navigation/native';

const ResultProgramListViewItems = ({id, title, division, place, time, image_url, remote, desc, kriteria, durasiWaktu, durasiBulan, navigation}) => (
    <TouchableOpacity onPress= {() => { 
        navigation.navigate("DetailsProgram", {id: id, title: title, division: division, place:place, time:time, image_url: image_url, remote:remote, desc:desc, kriteria:kriteria, durasiWaktu : durasiWaktu, durasiBulan : durasiBulan}); //kirim data
    }}>
        <View style={styles.square}>
            <View style={styles.left}>
                <Image source = {{uri: image_url}} style={styles.pic}/>
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.division}>{division}</Text>
                <View style={styles.inside}>
                    <View style={styles.left2}>
                        <Text style={styles.leftText}>{place}</Text>
                        <Text style={styles.leftText}>{time}</Text>
                    </View>
                    <View style={styles.right2}>
                        <Image source = {require('../../assets/icons/checkGreen.png')} style={styles.check}/>
                        <Text style={styles.rightText}>Certified</Text>
                    </View>
                </View>
            </View>
        </View>
    </TouchableOpacity>
);

export default ResultProgramListViewItems;

const styles = StyleSheet.create({
    square:{
        height: 105,
        width: 360,
        backgroundColor: '#E5E5E5',
        marginLeft : 15,
        marginRight : 15,
        borderRadius : 15,
        flexDirection : 'row',
        marginBottom : 13,
    },
    left:{
        width : '26%',
        justifyContent : 'center',
        alignItems : 'center'
    },
    image:{
        height : 55,
        width : 55,
    },
    right:{
        top : 10,
        width : 250
    },
    title:{
        fontWeight : 'bold',
        color : '#28527A',
        fontSize : 15,
    },
    division:{
        color: '#28527AD9',
        fontSize : 12
    },
    inside:{
        top : 3,
        flexDirection : 'row'
    },
    left2:{
        width : '50%',
    },
    right2:{
        width : '50%',
        left : 15,
        alignItems : 'center',
        flexDirection : 'row'
    },
    leftText:{
        color : '#0000007A',
        fontSize : 11
    },
    rightText:{
        fontSize : 11,
        color : '#71A132'
    },
    check:{
        width : 16,
        height : 16,
        marginRight : 2
    },
    pic:{
        width : 50,
        height : 50
    }
})