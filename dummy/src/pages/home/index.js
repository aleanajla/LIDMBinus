import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Bell1, User} from '../../assets'

const Home = () => {
    return (
        <View style={styles.pages}>
            <View style = {styles.header}>
                <View style = {styles.welcome}>
                    <Text>Welcome back,</Text>
                    <Text style = {{paddingLeft: 10}}>Andrew Willy</Text>
                </View>
                <View style = {styles.imgHeader}>
                    <Bell1 styles = {styles.bell}/>
                    <User styles = {styles.user}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    welcome :{
        paddingLeft: 30
    },
    pages : {
        //flex : 1,
        backgroundColor : '#F6F5F5'
    },
    header :{
        flexDirection : 'row'
    },
    bell :{
        // justifyContent: 'flex-End'
    },
    imgHeader :{
        flexDirection : 'row'
    }
})

export default Home;
