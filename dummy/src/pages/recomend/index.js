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
                <View style = {styles.header}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.conClose}>
                        <Image source = {require('../../assets/icons/arrowBack.png')} style = {styles.close}/>
                    </TouchableOpacity>
                    <Text style={styles.settings}> REKOMENDASI BUKU </Text>
                </View>
                <View style={{paddingTop : 15}}>
                    <RecomendBooksListView
                        itemList = {recomendBooksData}
                        navigation = {navigation}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Recomend;

const styles = StyleSheet.create({
    header:{
        display: 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        paddingRight: 28,
        paddingLeft : 28,
        height : 74,
        justifyContent:'center',
        backgroundColor : WARNA_SEKUNDER
    },
    close: {
        alignItems:'flex-start',
        alignContent:'flex-start'
    },
    conClose:{
        position:'absolute',
        left:25
    },
    settings:{
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
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
    garis:{
        backgroundColor : '#022E574A',
        width : 400,
        height : 2,
    }
})