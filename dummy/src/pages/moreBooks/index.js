import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Perpus } from '../../pages/index.js'
import { moreBooksData } from '../../assets/jsonData/moreBooksData'
import MoreBooksListView from '../../components/MoreBooksListView'

const MoreBooks = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View style={styles.pages}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                        <Image source = {require('../../assets/icons/arrowBack.png')} style={[styles.header, {width : 24, height:24}]}/>
                    </TouchableOpacity>
                    <Text style={styles.title3}>BUKU LAINNYA</Text>
                </View>
                <View style={{paddingTop : 15}}>
                    <MoreBooksListView
                        itemList = {moreBooksData}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default MoreBooks;

const styles = StyleSheet.create({
    header:{
        paddingLeft : 20,
        flexDirection : 'row',
        height : 70,
        backgroundColor : '#28527A',
        alignItems : 'center',
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20
    },
    title3:{
        color : 'white',
        fontWeight : 'bold',
        fontSize : 25,
        left : 75
    },
    text1:{
        fontSize : 14,
        color : '#7F96AE'
    },
    text2:{
        color : WARNA_SEKUNDER,
        fontSize : 14,
        fontWeight : 'bold'
    },
})