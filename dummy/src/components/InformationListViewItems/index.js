import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Information } from '../../pages';
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'


const InformationListViewItems = ({id, heading, description, image_url, navigation}) => (
    <TouchableOpacity onPress= {() => { 
        navigation.navigate('Information', {id: id, heading: heading, description: description, image_url: image_url}); //kirim data
    }}>
        <View>
            <Image source={{uri: image_url}} style={styles.image}/>
        </View>
    </TouchableOpacity>
);

export default InformationListViewItems;

const styles = StyleSheet.create({
    image:{
        width : 171,
        height : 106
    }
});