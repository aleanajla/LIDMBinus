import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Home } from '../../pages/index.js'
import AnnouncementListView from '../../components/AnnouncementListView'
import { announcementData } from '../../assets/jsonData/announcementData'

const Announcement = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.pages}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Image source = {require('../../assets/icons/arrowBackBlue.png')} style={[styles.header, {width : 24, height:24, top :12}]}/>
                </TouchableOpacity>
                <Text style={styles.announ}>PENGUMUMAN</Text>
            </View>
            <AnnouncementListView
                itemList = {announcementData}
                navigation={navigation}
            />
        </View>
    )
}

export default Announcement;

const styles = StyleSheet.create({
    header:{
        paddingLeft : 20,
        flexDirection : 'row',
        height : 60,
        alignItems : 'center',
        marginBottom : 10
    },
    announ:{
        alignItems : 'center',
        left : 52,
        fontSize : 25,
        color : '#022E57',
        fontWeight : 'bold',
        top : 15,
        marginBottom : 10
    },
    container:{
        width : 330,
        height : 91,
        backgroundColor : 'white',
        borderRadius : 20,
        justifyContent : 'center',
        // paddingLeft : 19,
        // left : 26,
        marginTop : 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10
    },
    title:{
        fontSize : 17,
        color : '#28527A',
        fontWeight : 'bold'
    },
    desc:{
        color : '#28527A',
        fontSize : 15,
        paddingTop : 5
    }
})