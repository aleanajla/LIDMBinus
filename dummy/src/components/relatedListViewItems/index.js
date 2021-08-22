import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'


const RelatedListViewItems = ({id, title, author, image_url}) => (
    <TouchableOpacity>
        <View style={styles.row}>
            <View style={styles.conBook}>
                <Image source={{uri: image_url}} style={styles.imgBook}/>
                <Text style={styles.bookTitle}>{title}</Text>
                <Text style={styles.bookAuthor}>Author: {author}</Text>
            </View>                                    
        </View>
    </TouchableOpacity>
);

export default RelatedListViewItems;

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