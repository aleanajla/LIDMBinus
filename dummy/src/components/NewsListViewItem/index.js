import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DetailAnnouncement } from '../../pages';
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'


const NewsListViewItems = ({id, title, description, image_url, detail, date, navigation}) => (
    <TouchableOpacity onPress= {() => { 
        navigation.navigate('DetailNews', {id: id, title: title, description: description, image_url: image_url, date: date, detail: detail}); //kirim data
    }}>
        <View style={styles.eachNews}>
            <View style={styles.left}>
                <Image source={{uri: image_url}} style={styles.images}/>
            </View>
            <View style={styles.right}>
                <Text style = {styles.title}>{title}</Text>
                <Text style = {styles.desc}>{description}</Text>
                <Text style= {styles.more}>read more...</Text>
            </View>
        </View>
    </TouchableOpacity>
);

export default NewsListViewItems;

const styles = StyleSheet.create({
    title : {
        fontSize: 10,
        fontWeight: 'bold',
        color : WARNA_SEKUNDER,
        width : 225,
        padding : 2
    },
    desc : {
        fontSize : 8,
        color : WARNA_SEKUNDER,
        width : 225,
        padding : 2,
        textAlign: 'justify'
    },
    right:{
        paddingLeft : 7
    },
    eachNews:{
        flexDirection : 'row',
        backgroundColor :'#E5E5E5',
        width : 375,
        margin : 7,
        padding : 5,
        borderRadius : 10,
        justifyContent : 'center'
    },
    more:{
        fontSize : 7,
        fontWeight : 'bold',
        color : WARNA_SEKUNDER,
        padding : 2,
        textAlign:'right'
    },
    images:{
        height : 69,
        width : 129,
        borderRadius:10
    },
    left:{
        justifyContent:'center'
    }
})
