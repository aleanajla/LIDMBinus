import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Bell1, User} from '../../assets'
import * as Progress from 'react-native-progress'
//install: npm install react-native-progress --save

const Home = ({navigation}) => {
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
            
            <View style ={styles.countainerRow}>
                <View style={[styles.containerLeftRight, {flex:1}]}>
                    <Text> Halo </Text>
                </View>
                <View style={[styles.containerLeftRight, {flex:1}]}>
                    <Text> Saya </Text>
                </View> 
            </View>

            {/* button */}
            <View style={styles.containerLeftRight}>
                <TouchableOpacity onPress= {() => { 
                    navigation.navigate('Register', {type:'test'});
                }}>
                    <Text style={{alignItems:'center'}}>Register</Text>
                </TouchableOpacity>
            </View>
            
            {/* ProgressBar */}
            <Progress.Bar progress={0.3} width={200} color={'#000'} unfilledColor={'#F12'}/>
            
            {/* Donnut Pie Chart */}
            <Progress.Circle progress={0.5} showsText={true} size={200} unfilledColor={'#F12'}/>

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
    },
    countainerRow:{
        marginBottom: 5,
        padding:15,
        flexDirection: 'row',
    },
    containerLeftRight:{
        backgroundColor: '#FFF',
        padding: 15,
        margin: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    }
})

export default Home;
