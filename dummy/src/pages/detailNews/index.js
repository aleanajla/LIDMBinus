import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { News } from '../../pages/index.js'

const DetailNews = ({route}) => {
    const navigation = useNavigation();

    const {id, title, description, image_url, detail, date}  = route.params;

    return(
        <ScrollView>
            <View style = {styles.detailCon}>
                <TouchableOpacity
                   onPress={()=>{navigation.goBack()}}
                >
                    <Image source = {require('../../assets/icons/arrowBackBlack.png')} />
                </TouchableOpacity>
                <View style = {styles.newsCon}>
                    <Text style = {styles.date}>{date}</Text>
                    <Text style = {styles.title}>{title}</Text>
                    <Image source={{uri: image_url}} style = {styles.pic}/>
                    <Text style ={styles.content}>{detail}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailNews;

const styles = StyleSheet.create({
    detailCon: {
        padding: 20,

    },
    newsCon:{
        padding:20
    },
    date:{
        fontSize: 15,
        fontWeight: '600',
        color: '#28527AB2'
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: WARNA_SEKUNDER
    },
    pic:{
        width:304,
        height:146,
        marginTop:10,
        marginBottom:20
    },
    content:{
        color: '#000000D6',
        textAlign: 'justify'
    }

})