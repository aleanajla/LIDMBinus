import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Bell1, User} from '../../assets'

const News = () => {
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
            <View>
                <View style = {styles.conHeader}>
                    <View style = {styles.optHeader}>
                        <Text style = {styles.titleHeader}>Dashboard</Text>
                    </View>

                    <View style = {styles.optHeader}>
                        <Text style = {styles.titleHeader}>Program</Text>
                    </View>

                    <View style = {styles.optHeader2}>
                        <Text style = {styles.titleHeader2}>News</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.square}></View>

            <View>
                <Text  style = {styles.newsHeader}>News About Kampus Merdeka</Text>
            </View>

            <View style={styles.eachNews}>
                <View styles={styles.left}>
                    <Image source={require('../../assets/images/nadiem.png')}/>
                </View>
                <View style={styles.right}>
                    <Text style = {styles.title}>Kampus Merdeka ala Mas Menteri Nadiem Makarim, Seperti Apa Konsepnya?</Text>
                    <Text style = {styles.desc}>Menteri Pendidikan dan Kebudayaan Republik Indonesia, Nadiem Makarim,  baru saja
                        mengeluarkan lima permendikbud mengenai landasan penerapan kebijakan Merdeka...
                    </Text>
                    <Text style= {styles.more}>read more...</Text>
                </View>
            </View>

            <View style={styles.eachNews}>
                <View styles={styles.left}>
                    <Image source={require('../../assets/images/nadiem2.png')}/>
                </View>
                <View style={styles.right}>
                    <Text style = {styles.title}>Inilah Arti “Kampus Merdeka” dalam kebijakan “Merdeka Belajar” ala Mendikbud Nadiem</Text>
                    <Text style = {styles.desc}>Nadiem menegaskan kebijakan Kampus Merdeka ini merupakan kelanjutan dari konsep
                        Merdeka Belajar. Pelaksanaannya paling memungkinkan untuk segera...
                    </Text>
                    <Text style= {styles.more}>read more...</Text>
                </View>
            </View>

            <View style={styles.eachNews}>
                <View styles={styles.left}>
                    <Image source={require('../../assets/images/kampusMerdeka.png')}/>
                </View>
                <View style={styles.right}>
                    <Text style = {styles.title}>Kampus Merdeka ala Mas Menteri Nadiem Makarim, Seperti Apa Konsepnya?</Text>
                    <Text style = {styles.desc}>"Kebijakan Kampus Merdeka ini merupakan kelanjutan dari konsep Merdeka Belajar.
                        Pelaksanaannya paling memungkinkan untuk segera dilangsungkan, hanya mengubah
                        peraturan menteri, tidak sampai mengubah Peraturan...
                    </Text>
                    <Text style= {styles.more}>read more...</Text>
import { StyleSheet, Text, View } from 'react-native'

const News = () => {
    return (
        <View>
            <View style = {styles.conHeader}>
                <View style = {styles.optHeader}>
                    <Text style = {styles.titleHeader}>Dashboard</Text>
                </View>

                <View style = {styles.optHeader}>
                    <Text style = {styles.titleHeader}>Program</Text>
                </View>

                <View style = {styles.optHeader2}>
                    <Text style = {styles.titleHeader2}>News</Text>
                </View>
            </View>
        </View>
    )
}

export default News;

const styles = StyleSheet.create({
    welcome :{
        paddingLeft: 30
    },
    pages : {
        backgroundColor : '#FFFFFF',
        fontFamily: 'Open-Sans'
    },
    header :{
        flexDirection : 'row',
        paddingTop: 15,
        backgroundColor: '#FFFFFF'
    },
    imgHeader :{
        flexDirection : 'row',
        justifyContent : 'flex-end',
        paddingRight : 20,
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
    },
    conHeader: {
        flexDirection: 'row',
        paddingTop : 10,
        paddingLeft: 20,
        // paddingRight:10,
        paddingBottom : 10,

    },
    optHeader: {
    conHeader: {
        flexDirection: 'row',
        padding:15
    },
    optHeader: {
        // padding: 20,
        margin:8,
        // backgroundColor : '#ffffff',
        width: 105,
        height: 35,
        borderRadius:20,
        alignItems: 'center'
    },
    titleHeader: {
        color: '#28527A',
        marginTop: 6
    },
    titleHeader2: {
        color: '#28527A',
        marginTop:6,
        fontWeight: 'bold'
    },
    optHeader2: {
        backgroundColor: '#FAD586',
        margin: 8,
        width: 105,
        height: 35,
        borderRadius:20,
        alignItems: 'center'
    },
    square:{
        height: 155,
        width: 400,
        backgroundColor: WARNA_SEKUNDER,
        // marginTop: 30
    },
    newsCon: {
        padding:15,
        paddingTop : 10,
    },
    conleftright: {
        margin: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 20,
        height: 130
    },
    newsHeader:{
        paddingTop : 23,
        fontSize : 18,
        color: WARNA_SEKUNDER,
        fontWeight : 'bold',
        marginLeft : 15
    },
    title : {
        fontSize: 10,
        fontWeight: 'bold',
        color : WARNA_SEKUNDER,
        width : 225,
        padding : 2
    },
    desc : {
        fontSize : 8,
        color : WARNA_SEKUNDER,
        width : 225,
        padding : 2
    },
    right:{
        paddingLeft : 7
    },
    eachNews:{
        flexDirection : 'row',
        backgroundColor :'#E5E5E5',
        width : 375,
        margin : 7,
        padding : 5,
        borderRadius : 10,
        justifyContent : 'center'
    },
    more:{
        fontSize : 7,
        fontWeight : 'bold',
        color : WARNA_SEKUNDER,
        padding : 2,
        
    },
    }
})
