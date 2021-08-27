import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Platform, Dimensions, FlatList} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import * as Progress from 'react-native-progress';
import { color } from 'react-native-elements/dist/helpers';


const MyBooksDataListViewItems = ({id, title, author, image_url, desc, progress, navigation}) => (
    <TouchableOpacity onPress= {() => { 
        navigation.navigate('DetailsBook', {id: id, title:title, author:author, image_url: image_url, desc:desc, progress: progress}); //kirim data
    }}>
        <View style={styles.row}>
            <View style={styles.conBook}>
                <Image source={{uri: image_url}} style={styles.imgBook}/>
                <Text style={styles.bookTitle}>{title}</Text>
                <Text style={styles.bookAuthor}>Penulis: {author}</Text>
                <Progress.Bar progress={progress} width={133} height={3} color={'#96bb7c'} unfilledColor={'white'}/>
            </View>                                    
        </View>
    </TouchableOpacity>
);

export default MyBooksDataListViewItems;

const styles = StyleSheet.create({
    row:{
        flexDirection : 'row',
        paddingTop : 15,
        paddingBottom : 15,
        marginBottom : 10,
        justifyContent :'space-between',
        alignItems : 'center',

    },
    bookTitle:{
        color : 'white',
        fontSize : 15,
        fontWeight : 'bold',
        textAlign:'center',
        width:164
    },
    bookAuthor:{
        color : 'white',
        fontSize : 11,
        textAlign:'center',
        marginBottom:15
    },
    conBook:{
        alignItems : 'center',
        justifyContent : 'center'
    },
    imgBook:{
        width:79,
        height:119
    }
})
