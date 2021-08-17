import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Home } from '../../pages/index.js'

const Notificationn = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.pages}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home',{type:''});}}>
                    <Image source = {require('../../assets/icons/arrowBackBlue.png')} style={[styles.header, {width : 34, height:34, top :8}]}/>
                </TouchableOpacity>
                <Text style={styles.announ}>Notification</Text>
            </View>
            <View style={styles.container1}>
                <View style={styles.container}>
                    <Text style={styles.title}>Yuk! Cek jadwal program yang telah anda terima</Text>
                    <Text style={styles.desc}>11 May 2021</Text>
                </View>
                <View style={styles.container}>
                <Text style={styles.title}>Sosialisasi Program Kampus Mengajar Angkatan 1 Tahun 2021</Text>
                <Text style={styles.desc}>11 Febuary 2021</Text>
            </View>
            </View>
        </View>
    )
}

export default Notificationn;

const styles = StyleSheet.create({
    header:{
        paddingLeft : 20,
        flexDirection : 'row',
        height : 60,
        alignItems : 'center',
    },
    announ:{
        alignItems : 'center',
        left : 72,
        fontSize : 25,
        color : '#022E57',
        fontWeight : 'bold',
        top : 15,
        marginBottom : 10
    },
    container1:{
        alignItems : 'center'
    },
    container:{
        width : 330,
        height : 91,
        backgroundColor : 'white',
        borderRadius : 20,
        justifyContent : 'center',
        paddingLeft : 19,
        // left : 36,
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