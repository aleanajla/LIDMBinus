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
            <View style = {styles.header}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.conClose}>
                    <Image source = {require('../../assets/icons/arrowBackBlue.png')} style = {styles.close}/>
                </TouchableOpacity>
                <Text style={styles.settings}>PENGUMUMAN</Text>
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
        display: 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        paddingRight: 28,
        paddingLeft : 28,
        height : 74,
        justifyContent:'center',
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
        fontSize: 23,
        color : '#022E57',
        fontWeight: 'bold',
    },
    announ:{
        alignItems : 'center',
        left : 52,
        fontSize : 25,
        color : '#022E57',
        fontWeight : 'bold',
        top : 15,
    }
})