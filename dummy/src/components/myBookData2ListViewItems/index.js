import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Platform, Dimensions, FlatList} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import Modal from 'react-native-modal'


const MyBooksData2ListViewItems = ({id, title, author, image_url, desc, navigation}) => (
    <TouchableOpacity onPress= {() => { 
        navigation.navigate('DetailsBook', {id: id, title:title, author:author, image_url: image_url, desc:desc}); //kirim data
    }}>
        <View style={styles.row}>
            <View style={styles.conBook}>
                <Image source={{uri: image_url}} style={styles.imgBook}/>
                <Text style={styles.bookTitle}>{title}</Text>
                <Text style={styles.bookAuthor}>Penulis: {author}</Text>
            </View>                                    
        </View>
    </TouchableOpacity>
);

export default MyBooksData2ListViewItems;

const styles = StyleSheet.create({
    row:{
        flexDirection : 'row',
        paddingTop : 15,
        paddingBottom : 15,
        marginBottom : 10,
        justifyContent :'center',
        alignItems : 'center'
    },
    bookTitle:{
        color : WARNA_SEKUNDER,
        fontSize : 15,
        fontWeight : 'bold',
        textAlign:'center',
        width:164
    },
    bookAuthor:{
        color : WARNA_SEKUNDER,
        fontSize : 11,
        textAlign:'center',
    },
    conBook:{
        width: '50%',
        alignItems : 'center',
        justifyContent : 'center'
    },
    imgBook:{
        width:79,
        height:119
    }
})
