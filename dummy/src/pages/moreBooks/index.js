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
                <View style = {styles.header}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.conClose}>
                        <Image source = {require('../../assets/icons/arrowBack.png')} style = {styles.close}/>
                    </TouchableOpacity>
                    <Text style={styles.settings}> BUKU LAINNYA </Text>
                </View>
                <View style={{paddingTop : 15}}>
                    <MoreBooksListView
                        itemList = {moreBooksData}
                        navigation = {navigation}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default MoreBooks;

const styles = StyleSheet.create({
    header:{
        display: 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        paddingRight: 28,
        paddingLeft : 28,
        backgroundColor: WARNA_SEKUNDER,
        height : 74,
        justifyContent:'center'
    },
    close: {
        marginTop: 5,
        alignItems:'flex-start',
        alignContent:'flex-start'
    },
    conClose:{
        position:'absolute',
        left:25
    },
    settings:{
        fontSize: 23,
        color: WARNA_UTAMA,
        fontWeight: 'bold',
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