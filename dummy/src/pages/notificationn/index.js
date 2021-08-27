import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Home } from '../../pages/index.js'
import NotificationListView from '../../components/NotificationListView'
import { notificationData } from '../../assets/jsonData/notificationData'

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const Notificationn = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View style={styles.pages}>
                <View style = {styles.header}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.conClose}>
                        <Image source = {require('../../assets/icons/arrowBackBlue.png')} style = {styles.close}/>
                    </TouchableOpacity>
                    <Text style={styles.settings}>NOTIFIKASI</Text>
                </View>
                <View style={styles.container1}>
                    <NotificationListView
                        itemList = {notificationData}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Notificationn;

const styles = StyleSheet.create({
    pages:{
        height : windowsHeight,
        backgroundColor : '#FFFFFF'
    },
    header:{
        display: 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        paddingRight: 28,
        paddingLeft : 28,
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
        color : '#022E57',
        fontWeight: 'bold',
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