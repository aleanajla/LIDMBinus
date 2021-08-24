import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Perpus } from '../../pages/index.js'
import { recomendBooksData } from '../../assets/jsonData/recomendBooksData'
import RecomendBooksListView from '../../components/RecomendBooksListView'

const Recomend = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View style={styles.pages}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                        <Image source = {require('../../assets/icons/arrowBack.png')} style={[styles.header, {width : 24, height:24}]}/>
                    </TouchableOpacity>
                    <Text style={styles.title3}>REKOMENDASI BUKU</Text>
                </View>
                <View style={{paddingTop : 15}}>
                    <RecomendBooksListView
                        itemList = {recomendBooksData}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Recomend;

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
        left : 35
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