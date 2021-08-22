import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Home } from '../../pages/index.js'
import NotificationListView from '../../components/NotificationListView'
import { notificationData } from '../../assets/jsonData/notificationData'
// import {notificationData} from ''

const Notificationn = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.pages}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Image source = {require('../../assets/icons/arrowBackBlue.png')} style={[styles.header, {width : 24, height:24, top :15}]}/>
                </TouchableOpacity>
                <Text style={styles.announ}>Notification</Text>
            </View>
            <View style={styles.container1}>
                <NotificationListView
                    itemList = {notificationData}
                />
            </View>
        </View>
    )
}

export default Notificationn;

const styles = StyleSheet.create({
    pages:{
        height : 900,
        backgroundColor : '#FFFFFF'
    },
    header:{
        paddingLeft : 25,
        flexDirection : 'row',
        height : 60,
        alignItems : 'center',
        marginBottom : 10
    },
    announ:{
        alignItems : 'center',
        left : 80,
        fontSize : 25,
        color : '#022E57',
        fontWeight : 'bold',
        top : 15,
        marginBottom : 10
    },
    container1:{
        alignItems : 'center',
        paddingBottom : 15,
    },
})