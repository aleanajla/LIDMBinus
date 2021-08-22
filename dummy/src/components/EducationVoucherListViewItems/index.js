import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { WARNA_SEKUNDER } from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';


const EducationVoucherListViewItems = ({id, company, description, point, image_url, desc, conTerms, navigation}) => (
    <TouchableOpacity onPress= {() => { 
        navigation.navigate('ConTerms', {id: id, company: company, description: description, point: point, image_url: image_url, desc: desc, conTerms: conTerms}); //kirim data
    }}>
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Image source = {{uri : image_url}} style={styles.pic}/>
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
    </TouchableOpacity>
);

export default EducationVoucherListViewItems;

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
    },
    pic:{
        width: 110,
        height: 37
    }
})