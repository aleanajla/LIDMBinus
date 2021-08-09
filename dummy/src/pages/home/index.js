import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Bell1, User} from '../../assets'

const Home = () => {
    return (
        <View style={styles.pages}>
            <View style = {styles.header}>
                <View style = {styles.welcome}>
                    <Text style = {{fontSize: 14, color : '#28527A'}}>Welcome back,</Text>
                    <Text style = {{fontSize: 20,fontWeight: 'bold', color: WARNA_SEKUNDER}}>Andrew Willy</Text>
                </View>
                <View style = {styles.imgHeader}>
                    <Bell1 style = {styles.bell}/>
                    <User style = {styles.user}/>
                </View>
            </View>
            <View style = {[styles.garis, styles.shadow]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    welcome :{
        paddingLeft: 30
    },
    pages : {
        //flex : 1,
        backgroundColor : '#F6F5F5',
        fontFamily: 'Open-Sans'
    },
    header :{
        flexDirection : 'row',
        paddingTop: 15,
        backgroundColor: '#F6F5F5'
    },
    imgHeader :{
        flexDirection : 'row',
        justifyContent : 'flex-end',
        paddingRight : 20,
        // justifyContent : 'space-between',
        flex: 1
    },
    bell :{
        fontSize : 25, 
        padding : 17,
        right:10,
        top:3.5
    },
    garis:{
        paddingTop: 8,
        borderBottomColor: '#28527A',
        borderBottomWidth: 1,
        // elevation: 5,
    },
    shadow :{
        // shadowColor: '#000000',
        // shadowOffset: {
        //     width: 0, 
        //     height: 4
        // },
        // shadowOpacity: 10,
        // shadowRadius: 10,
        // elevation:10
    }
})

export default Home;
